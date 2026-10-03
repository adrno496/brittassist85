/* BrittAssist : chaque formulaire (contact + questionnaire) part EN PARALLÈLE
   vers deux destinations :
   - AxdiaOS (back-office) via sendBeacon/fetch keepalive — survit à la navigation ;
   - formsubmit (e-mail) via la soumission native d'origine (action + _next).
   On ne fait donc PAS de preventDefault : l'e-mail et sa redirection restent
   intacts, et AxdiaOS reçoit la demande en plus. */
(function () {
  "use strict";
  var API = "https://axdiaos.vercel.app/os/api/v1/le-brittassist/contacts";

  function val(fd, k) {
    var v = fd.get(k);
    return v ? String(v).trim() : "";
  }

  function sendToAxdia(form) {
    var fd = new FormData(form);
    // Champ piège rempli : c'est un robot. On n'encombre pas le back-office.
    if (val(fd, "_honey")) return;
    var name = (val(fd, "prenom") + " " + val(fd, "nom")).trim() || val(fd, "name") || "Contact";

    var msgParts = [];
    ["contexte", "objectif", "message"].forEach(function (k) {
      var v = val(fd, k);
      if (v) msgParts.push(v);
    });

    var meta = {};
    ["profil", "besoin", "metier", "anciennete", "taille", "timing", "budget"].forEach(function (k) {
      var v = val(fd, k);
      if (v) meta[k] = v;
    });
    var domaines = fd.getAll("domaines[]").map(String).filter(Boolean).join(", ");
    if (domaines) meta["domaines"] = domaines;

    var payload = {
      name: name,
      email: val(fd, "email"),
      phone: val(fd, "telephone") || val(fd, "phone"),
      subject: form.getAttribute("data-subject") || "Demande de contact",
      message: msgParts.join("\n\n").slice(0, 3900),
      meta: meta,
    };
    var json = JSON.stringify(payload);

    // text/plain => requête CORS "simple" (pas de préflight). keepalive/sendBeacon
    // => la requête part même si la page navigue (soumission formsubmit en cours).
    var sent = false;
    try {
      if (navigator.sendBeacon) {
        var blob = new Blob([json], { type: "text/plain;charset=UTF-8" });
        sent = navigator.sendBeacon(API, blob);
      }
    } catch (e) {
      sent = false;
    }
    if (!sent) {
      try {
        fetch(API, { method: "POST", body: json, keepalive: true }).catch(function () {});
      } catch (e) {
        /* on n'empêche jamais l'envoi e-mail */
      }
    }
  }

  function handle(form) {
    form.addEventListener("submit", function () {
      // Envoi vers AxdiaOS, puis on laisse la soumission native (formsubmit) suivre.
      try {
        sendToAxdia(form);
      } catch (e) {
        /* ne jamais bloquer l'e-mail */
      }
      // Pas de preventDefault : formsubmit envoie l'e-mail et redirige via _next.
    });
  }

  function init() {
    document.querySelectorAll("form[data-axdia-form]").forEach(handle);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
