(function (window, document) {
    'use strict';

    var LOCAL_PAGE_LANGUAGES = ['de', 'fr', 'pt', 'es', 'ja'];
    var googleTranslateLoading = false;

    var languageMessages = {
        de: {
            local: 'Diese Seite ist auf Deutsch verfügbar. Möchten Sie die deutsche Version öffnen?',
            google: 'Möchten Sie diese Seite ins Deutsche übersetzen?',
            open: 'Öffnen',
            translate: 'Übersetzen',
            close: 'Nicht jetzt'
        },
        fr: {
            local: 'Cette page est disponible en français. Voulez-vous ouvrir la version française ?',
            google: 'Voulez-vous traduire cette page en français ?',
            open: 'Ouvrir',
            translate: 'Traduire',
            close: 'Pas maintenant'
        },
        pt: {
            local: 'Esta página está disponível em português. Deseja abrir essa versão?',
            google: 'Deseja traduzir esta página para português?',
            open: 'Abrir',
            translate: 'Traduzir',
            close: 'Agora não'
        },
        es: {
            local: 'Esta página está disponible en español. ¿Quieres abrir esa versión?',
            google: '¿Quieres traducir esta página al español?',
            open: 'Abrir',
            translate: 'Traducir',
            close: 'Ahora no'
        },
        ja: {
            local: 'このページには日本語版があります。日本語版を開きますか？',
            google: 'このページを日本語に翻訳しますか？',
            open: '開く',
            translate: '翻訳',
            close: '後で'
        }
    };

    function normalizeLanguage(value) {
        return String(value || '').trim().toLowerCase().split(/[-_]/)[0];
    }

    function getUserLanguage() {
        var languages = navigator.languages && navigator.languages.length
            ? navigator.languages
            : [navigator.language || navigator.userLanguage || 'en'];

        return normalizeLanguage(languages[0]) || 'en';
    }

    function getPageLanguage() {
        return normalizeLanguage(document.documentElement.lang) || 'en';
    }

    function getLocalizedPageUrl(language) {
        var lang = normalizeLanguage(language);
        if (LOCAL_PAGE_LANGUAGES.indexOf(lang) === -1) return '';

        var alternates = document.querySelectorAll('link[rel~="alternate"][hreflang][href]');
        for (var i = 0; i < alternates.length; i += 1) {
            if (normalizeLanguage(alternates[i].getAttribute('hreflang')) === lang) {
                return new URL(alternates[i].getAttribute('href'), window.location.href).href;
            }
        }

        return '';
    }

    function getLanguageAction(language) {
        var lang = normalizeLanguage(language || getUserLanguage());
        var pageLang = getPageLanguage();

        if (!lang || lang === pageLang) {
            return { type: 'none', language: lang, url: '' };
        }

        var localizedUrl = getLocalizedPageUrl(lang);
        if (localizedUrl) {
            return { type: 'local', language: lang, url: localizedUrl };
        }

        return { type: 'google', language: lang, url: '' };
    }

    function getPromptContent(action) {
        var messages = languageMessages[action.language];

        if (messages) {
            return {
                message: action.type === 'local' ? messages.local : messages.google,
                accept: action.type === 'local' ? messages.open : messages.translate,
                close: messages.close
            };
        }

        return {
            message: 'Would you like to translate this page into your language?',
            accept: 'Translate',
            close: 'Not now'
        };
    }

    function ensureGoogleTranslateContainer() {
        var container = document.getElementById('google_translate_element');
        if (!container) {
            container = document.createElement('div');
            container.id = 'google_translate_element';
            container.hidden = true;
            document.body.appendChild(container);
        }
        return container;
    }

    function applyTranslation(language, attemptsLeft) {
        var select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = language;
            select.dispatchEvent(new Event('change'));
            return;
        }

        if (attemptsLeft > 0) {
            window.setTimeout(function () {
                applyTranslation(language, attemptsLeft - 1);
            }, 250);
        } else {
            showNotice('The translator could not be loaded. Please try again.');
        }
    }

    function startGoogleTranslation(language) {
        var pageLang = getPageLanguage();
        ensureGoogleTranslateContainer();

        if (document.querySelector('.goog-te-combo')) {
            applyTranslation(language, 20);
            return;
        }

        window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement({
                pageLanguage: pageLang
            }, 'google_translate_element');
            applyTranslation(language, 20);
        };

        if (!googleTranslateLoading && !document.getElementById('google-translate-element-script')) {
            googleTranslateLoading = true;
            var script = document.createElement('script');
            script.id = 'google-translate-element-script';
            script.type = 'text/javascript';
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.onerror = function () {
                googleTranslateLoading = false;
                showNotice('The translator could not be loaded. Please try again.');
            };
            document.body.appendChild(script);
        }
    }

    function executeLanguageAction(action) {
        if (action.type === 'local' && action.url) {
            window.location.assign(action.url);
            return;
        }

        if (action.type === 'google') {
            startGoogleTranslation(action.language);
        }
    }

    function translatePage(language) {
        var requestedLanguage = normalizeLanguage(language || getUserLanguage());
        var action = getLanguageAction(requestedLanguage);

        if (action.type === 'none') {
            showNotice('This page is already in your language.');
            return;
        }

        executeLanguageAction(action);
    }

    function getDismissalKey() {
        return 'languageOfferDismissed:' + window.location.pathname;
    }

    function wasOfferDismissed() {
        try {
            return window.sessionStorage.getItem(getDismissalKey()) === 'true';
        } catch (error) {
            return false;
        }
    }

    function dismissOffer() {
        try {
            window.sessionStorage.setItem(getDismissalKey(), 'true');
        } catch (error) {
            // The prompt can still be closed when storage is unavailable.
        }
    }

    function removePrompt(panel) {
        var wrapper = panel && panel.parentElement;
        if (wrapper && wrapper.id === 'language-offer-wrapper') {
            wrapper.remove();
        } else if (panel) {
            panel.remove();
        }
    }

    function offerPreferredLanguage() {
        if (wasOfferDismissed() || document.getElementById('language-offer-wrapper')) return;

        var action = getLanguageAction();
        if (action.type === 'none') return;

        var content = getPromptContent(action);
        var wrapper = document.createElement('div');
        wrapper.id = 'language-offer-wrapper';

        var panel = document.createElement('div');
        panel.style.cssText = 'position:fixed;bottom:0;left:20px;right:20px;background:#111;color:#fff;padding:15px;border-radius:10px;z-index:9999;font-size:14px;display:flex;flex-direction:column;align-items:center;gap:10px';

        var message = document.createElement('span');
        message.textContent = content.message;

        var controls = document.createElement('div');
        var accept = document.createElement('button');
        accept.id = 'language-offer-accept';
        accept.type = 'button';
        accept.textContent = content.accept;
        accept.style.cssText = 'margin-right:10px;cursor:pointer';

        var close = document.createElement('button');
        close.id = 'language-offer-close';
        close.type = 'button';
        close.textContent = content.close;
        close.style.cursor = 'pointer';

        accept.addEventListener('click', function () {
            removePrompt(panel);
            executeLanguageAction(action);
        });

        close.addEventListener('click', function () {
            dismissOffer();
            removePrompt(panel);
        });

        controls.appendChild(accept);
        controls.appendChild(close);
        panel.appendChild(message);
        panel.appendChild(controls);
        wrapper.appendChild(panel);
        document.body.appendChild(wrapper);
    }

    function enhanceLegacyPrompt() {
        var accept = document.getElementById('translateBtn');
        if (!accept || accept.dataset.languageRoutingReady === 'true') return;

        var action = getLanguageAction();
        if (action.type === 'none') return;

        var controls = accept.parentElement;
        var panel = controls && controls.parentElement;
        if (!panel) return;

        var content = getPromptContent(action);
        var message = panel.querySelector('span');
        var close = document.getElementById('closeBtn');

        if (message) message.textContent = content.message;
        accept.textContent = content.accept;
        accept.dataset.languageRoutingReady = 'true';
        accept.onclick = function () {
            if (panel.parentElement) panel.parentElement.remove();
            executeLanguageAction(action);
        };

        if (close) {
            close.textContent = content.close;
            close.onclick = function () {
                dismissOffer();
                if (panel.parentElement) panel.parentElement.remove();
            };
        }
    }

    function showNotice(message) {
        var notice = document.createElement('div');
        notice.className = 'lang-notice';
        notice.textContent = message;
        document.body.appendChild(notice);

        window.setTimeout(function () {
            notice.style.opacity = '0';
            window.setTimeout(function () { notice.remove(); }, 400);
        }, 1800);
    }

    window.getPreferredLanguageAction = getLanguageAction;
    window.getLocalizedPageUrl = getLocalizedPageUrl;
    window.offerPreferredLanguage = offerPreferredLanguage;
    window.translatePage = translatePage;

    if ('MutationObserver' in window) {
        var legacyObserver = new MutationObserver(function () {
            enhanceLegacyPrompt();
        });
        legacyObserver.observe(document.documentElement, { childList: true, subtree: true });
    }

    enhanceLegacyPrompt();

    if (getPageLanguage() === 'en') {
        window.setTimeout(function () {
            enhanceLegacyPrompt();
            if (!document.getElementById('translateBtn') && !document.getElementById('language-offer-wrapper')) {
                offerPreferredLanguage();
            }
        }, 3000);
    }
})(window, document);
