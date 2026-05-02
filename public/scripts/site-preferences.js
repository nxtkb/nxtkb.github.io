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

  function createKeymapLightbox() {
    var lightbox = document.createElement('div');
    lightbox.className = 'keymap-js-lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');

    var backdrop = document.createElement('button');
    backdrop.className = 'keymap-js-lightbox-backdrop';
    backdrop.type = 'button';
    backdrop.setAttribute('aria-label', 'Close keymap preview');

    var panel = document.createElement('figure');
    panel.className = 'keymap-js-lightbox-panel';

    var close = document.createElement('button');
    close.className = 'keymap-js-lightbox-close';
    close.type = 'button';
    close.setAttribute('aria-label', 'Close keymap preview');
    close.textContent = '\u00d7';

    var image = document.createElement('img');
    image.alt = '';

    panel.appendChild(close);
    panel.appendChild(image);
    lightbox.appendChild(backdrop);
    lightbox.appendChild(panel);
    document.body.appendChild(lightbox);

    function hide() {
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('nxtkb-keymap-lightbox-open');
      image.removeAttribute('src');
    }

    function show(source, alt) {
      image.src = source;
      image.alt = alt || 'Keymap preview';
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('nxtkb-keymap-lightbox-open');
      close.focus();
    }

    backdrop.addEventListener('click', hide);
    close.addEventListener('click', hide);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') hide();
    });

    return { show: show };
  }

  function enhanceKeymapImages() {
    var content = document.querySelector('.sl-markdown-content');
    if (!content) return;

    var lightbox;
    content.querySelectorAll('img[src^="/keymaps/"]').forEach(function (image) {
      if (image.closest('.keymap-lightbox')) return;
      if (image.closest('.keymap-overview')) return;
      if (image.closest('.keymap-image-link')) return;

      var link = document.createElement('a');
      link.className = 'keymap-image-link';
      link.href = image.currentSrc || image.src;
      link.setAttribute('aria-label', image.alt ? 'Open ' + image.alt : 'Open keymap image');
      image.parentNode.insertBefore(link, image);
      link.appendChild(image);

      link.addEventListener('click', function (event) {
        event.preventDefault();
        if (!lightbox) lightbox = createKeymapLightbox();
        lightbox.show(image.currentSrc || image.src, image.alt);
      });
    });
  }

  redirectToPreferredLanguage();

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      function () {
        bindLanguageControls();
        enhanceKeymapImages();
      },
      { once: true }
    );
  } else {
    bindLanguageControls();
    enhanceKeymapImages();
  }
})();
