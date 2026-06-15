/* BrittAssist → AxdiaOS : envoie les formulaires (contact + questionnaire) au
   back-office AxdiaOS. Repli sur l'envoi e-mail d'origine si l'API échoue. */
(function () {
  "use strict";
  var API = "https://axdiaos.vercel.app/os/api/v1/le-brittassist/contacts";

  function val(fd, k) {
    var v = fd.get(k);
    return v ? String(v).trim() : "";
  }

  function handle(form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      var fd = new FormData(form);

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

      var btn = form.querySelector('[type="submit"], button');
      if (btn) btn.disabled = true;

      try {
        var r = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (r.ok) {
          window.location.href =
            form.getAttribute("data-next") || window.location.pathname + "?sent=true";
          return;
        }
      } catch (err) {
        /* repli ci-dessous */
      }
      // Repli : envoi e-mail natif (formsubmit) si AxdiaOS est injoignable.
      if (btn) btn.disabled = false;
      HTMLFormElement.prototype.submit.call(form);
    });
  }

  function init() {
    document.querySelectorAll("form[data-axdia-form]").forEach(handle);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
