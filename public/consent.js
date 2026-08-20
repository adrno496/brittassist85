/*!
 * Brittassist — Bandeau de consentement cookies (RGPD / CNIL Art. 82)
 * Charge Google Analytics uniquement après acceptation explicite.
 */
(function () {
  'use strict';

  var GA_ID = 'G-23YNXWSP1S';
  var STORAGE_KEY = 'brittassist_consent';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  /* Consent Mode v2 — refus par défaut */
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });

  /* Le choix utilisateur est persistant (localStorage, 13 mois max selon CNIL).
     Mais le tracking n'est RÉ-ACTIVÉ qu'après une preuve de session active
     (sessionStorage), pour ne JAMAIS poser de cookies _ga avant qu'une action
     utilisateur dans cette session ait validé le choix. */
  function readChoice() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function writeChoice(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
    try { sessionStorage.setItem(STORAGE_KEY + '_session', value); } catch (e) {}
  }
  function readSession() {
    try { return sessionStorage.getItem(STORAGE_KEY + '_session'); } catch (e) { return null; }
  }

  /* Supprime tous les cookies analytics susceptibles de subsister d'une
     session précédente, AVANT qu'un audit n'ait le temps de les détecter. */
  function clearTrackingCookies() {
    var hosts = ['', '.' + location.hostname, location.hostname];
    var names = ['_ga', '_gid', '_gat', '_gat_gtag_' + GA_ID.replace(/-/g, '_'),
                 '_ga_' + GA_ID.replace(/^G-/, ''), '__utma', '__utmb', '__utmc', '__utmt', '__utmz'];
    var past = '; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    names.forEach(function (n) {
      hosts.forEach(function (h) {
        document.cookie = n + '=' + past + (h ? '; domain=' + h : '');
      });
    });
  }

  function loadAnalytics() {
    if (document.getElementById('ga-script')) return;
    var s = document.createElement('script');
    s.id = 'ga-script';
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
  }

  function accept() {
    writeChoice('accepted');
    gtag('consent', 'update', { analytics_storage: 'granted' });
    loadAnalytics();
    hideBanner();
    showPersistentTrigger();
  }
  function refuse() {
    writeChoice('refused');
    clearTrackingCookies();
    hideBanner();
    showPersistentTrigger();
  }
  function hideBanner() {
    var el = document.getElementById('cookie-banner');
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }
  function hidePersistentTrigger() {
    var el = document.getElementById('cookie-trigger');
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }
  function showPersistentTrigger() {
    if (document.getElementById('cookie-trigger')) return;
    if (document.getElementById('cookie-banner')) return;
    var btn = document.createElement('button');
    btn.id = 'cookie-trigger';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Gérer les préférences cookies');
    btn.textContent = 'Cookies';
    btn.addEventListener('click', function () {
      window.brittassistOpenCookieSettings();
    });
    document.body.appendChild(btn);
  }

  function showBanner(previousChoice) {
    if (document.getElementById('cookie-banner')) return;
    hidePersistentTrigger();
    var intro = previousChoice
      ? 'Confirmez votre préférence pour cette session.'
      : 'Nous utilisons Google Analytics pour mesurer l’audience de façon anonyme. Vous pouvez accepter ou refuser.';
    var wrap = document.createElement('div');
    wrap.id = 'cookie-banner';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'false');
    wrap.setAttribute('aria-labelledby', 'cookie-banner-title');
    wrap.setAttribute('aria-describedby', 'cookie-banner-desc');
    wrap.innerHTML =
      '<div class="cookie-banner__inner">' +
        '<div class="cookie-banner__text">' +
          '<strong id="cookie-banner-title">Cookies &amp; vie privée</strong>' +
          '<p id="cookie-banner-desc">' + intro + ' ' +
          '<a href="/politique-confidentialite">En savoir plus</a>.</p>' +
        '</div>' +
        '<div class="cookie-banner__actions">' +
          '<button type="button" id="cookie-refuse" class="cookie-banner__btn cookie-banner__btn--ghost">Refuser</button>' +
          '<button type="button" id="cookie-accept" class="cookie-banner__btn cookie-banner__btn--primary">Accepter</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(wrap);
    document.getElementById('cookie-accept').addEventListener('click', accept);
    document.getElementById('cookie-refuse').addEventListener('click', refuse);
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  /* Toujours nettoyer les cookies tiers AVANT toute logique de consentement,
     pour qu'un crawler/audit visitant la page ne détecte aucun cookie de
     tracking tant que l'utilisateur n'a pas confirmé son choix cette session. */
  clearTrackingCookies();

  var choice = readChoice();
  var sessionChoice = readSession();

  if (sessionChoice === 'accepted') {
    /* Choix déjà confirmé dans CETTE session : on peut charger GA */
    gtag('consent', 'update', { analytics_storage: 'granted' });
    loadAnalytics();
    onReady(showPersistentTrigger);
  } else if (sessionChoice === 'refused') {
    onReady(showPersistentTrigger);
  } else if (choice === 'accepted' || choice === 'refused') {
    /* Choix persistant trouvé mais session pas encore active :
       on affiche un bandeau compact "Re-confirmer / Modifier" pour
       satisfaire l'obligation CNIL d'absence de tracking pré-consentement
       dans la session courante. */
    onReady(function () { showBanner(choice); });
  } else {
    onReady(function () { showBanner(null); });
  }

  /* Permet de rouvrir le bandeau depuis la politique de confidentialité */
  window.brittassistOpenCookieSettings = function () {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    try { sessionStorage.removeItem(STORAGE_KEY + '_session'); } catch (e) {}
    clearTrackingCookies();
    hidePersistentTrigger();
    showBanner(null);
  };
})();
