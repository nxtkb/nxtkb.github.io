(function () {
  var languageKey = 'nxtkb-language';
  var localizablePaths = new Set([
    '/',
    '/blog/',
    '/blog/why-choose-a-split-keyboard/',
    '/docs/',
    '/docs/ergonomics/why-choose-a-split-keyboard/',
    '/docs/firmware/',
    '/docs/firmware/build-your-own-firmware/',
    '/docs/firmware/ferris-sweep-configuration/',
    '/docs/firmware/how-to-flash-a-firmware/',
    '/docs/firmware/sweep-pro-configuration/',
    '/docs/setup/',
    '/docs/setup/connect/',
    '/docs/setup/keymap/',
    '/docs/setup/keymap/ferris-sweep-keymap/',
    '/docs/setup/keymap/ferris-sweep-pro-keymap/',
    '/docs/setup/keymap/how-to-update-keymaps/',
    '/docs/setup/keymap/input-tester/',
    '/docs/setup/keymap/trackpad/',
    '/products/',
    '/products/ferris-sweep/',
    '/products/ferris-sweep-pro/',
    '/products/low-profile-keycaps/',
    '/products/magnetic-stand/',
    '/tools/',
  ]);

  function normalizePath(pathname) {
    if (!pathname) return '/';
    if (pathname.length > 1 && !pathname.endsWith('/')) return pathname + '/';
    return pathname;
  }

  function targetLanguageFromPath(pathname) {
    return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
  }

  function setLanguage(language) {
    try {
      localStorage.setItem(languageKey, language);
    } catch {
      /* Ignore storage failures in private or restricted browsing contexts. */
    }
  }

  function getLanguage() {
    try {
      return localStorage.getItem(languageKey);
    } catch {
      return null;
    }
  }

  function redirectToPreferredLanguage() {
    var preferred = getLanguage();
    var currentPath = normalizePath(window.location.pathname);
    var isChinesePath = currentPath === '/zh/' || currentPath.startsWith('/zh/');

    if (isChinesePath) {
      setLanguage('zh');
      return;
    }

    if (preferred !== 'zh' || !localizablePaths.has(currentPath)) return;

    window.location.replace('/zh' + currentPath + window.location.search + window.location.hash);
  }

  function bindLanguageControls() {
    document.addEventListener(
      'click',
      function (event) {
        var link = event.target && event.target.closest && event.target.closest('a[href]');
        if (!link) return;
        if (!link.classList.contains('lang-switch')) return;
        setLanguage(targetLanguageFromPath(new URL(link.href, window.location.href).pathname));
      },
      true
    );

    document.addEventListener(
      'change',
      function (event) {
        var select = event.target;
        if (!(select instanceof HTMLSelectElement)) return;
        if (!select.closest('starlight-lang-select')) return;
        setLanguage(targetLanguageFromPath(select.value));
      },
      true
    );
  }

  redirectToPreferredLanguage();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindLanguageControls, { once: true });
  } else {
    bindLanguageControls();
  }
})();
