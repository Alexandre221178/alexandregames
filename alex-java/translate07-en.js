(function (window, document) {
    'use strict';

    var LOCAL_PAGE_LANGUAGES = ['de', 'fr', 'pt', 'es', 'ja'];
    var googleTranslateLoading = false;
    var googleTranslateTargetLanguage = '';
    var googleTranslateRequest = 0;

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
        },
        ko: {
            local: '이 페이지는 한국어로 제공됩니다. 한국어 버전을 여시겠습니까?',
            google: '이 페이지를 한국어로 번역하시겠습니까?',
            open: '열기',
            translate: '번역',
            close: '나중에'
        },
        pl: {
            local: 'Ta strona jest dostępna w języku polskim. Czy chcesz otworzyć polską wersję?',
            google: 'Czy chcesz przetłumaczyć tę stronę na język polski?',
            open: 'Otwórz',
            translate: 'Przetłumacz',
            close: 'Nie teraz'
        },
        it: {
            local: 'Questa pagina è disponibile in italiano. Vuoi aprire la versione italiana?',
            google: 'Vuoi tradurre questa pagina in italiano?',
            open: 'Apri',
            translate: 'Traduci',
            close: 'Non ora'
        },
        ru: {
            local: 'Эта страница доступна на русском языке. Открыть русскую версию?',
            google: 'Хотите перевести эту страницу на русский язык?',
            open: 'Открыть',
            translate: 'Перевести',
            close: 'Не сейчас'
        },
        ar: {
            local: 'هذه الصفحة متاحة باللغة العربية. هل تريد فتح النسخة العربية؟',
            google: 'هل تريد ترجمة هذه الصفحة إلى العربية؟',
            open: 'فتح',
            translate: 'ترجمة',
            close: 'ليس الآن'
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

        // No local hreflang page: keep this page open and use the
        // Google translator connected to the Translate button.
        return { type: 'google', language: lang, url: '' };
    }

    function getPromptContent(action) {
        var messages = languageMessages[action.language];

        if (messages) {
            return {
                message: action.type === 'local' ? messages.local : messages.google,
                accept: action.type === 'local' ? messages.open : messages.translate,
                close: messages.close,
                language: action.language,
                direction: action.language === 'ar' ? 'rtl' : 'ltr'
            };
        }

        return {
            message: 'Would you like to translate this page into your language?',
            accept: 'Translate',
            close: 'Not now',
            language: 'en',
            direction: 'ltr'
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
            select.dispatchEvent(new Event('change', { bubbles: true }));
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

    function isGoogleTranslateReady() {
        return Boolean(
            window.google &&
            window.google.translate &&
            typeof window.google.translate.TranslateElement === 'function'
        );
    }

    function initializeGoogleTranslate(language) {
        var container = ensureGoogleTranslateContainer();

        try {
            if (container.dataset.googleTranslateInitialized !== 'true') {
                new window.google.translate.TranslateElement({
                    pageLanguage: getPageLanguage()
                }, 'google_translate_element');
                container.dataset.googleTranslateInitialized = 'true';
            }

            applyTranslation(language, 60);
        } catch (error) {
            googleTranslateLoading = false;
            showNotice('The translator could not be loaded. Please try again.');
        }
    }

    function waitForGoogleTranslate(language, attemptsLeft, requestId) {
        if (requestId !== googleTranslateRequest) return;

        if (isGoogleTranslateReady()) {
            googleTranslateLoading = false;
            initializeGoogleTranslate(language);
            return;
        }

        if (attemptsLeft > 0) {
            window.setTimeout(function () {
                waitForGoogleTranslate(language, attemptsLeft - 1, requestId);
            }, 250);
            return;
        }

        googleTranslateLoading = false;
        var staleScript = document.getElementById('google-translate-element-script');
        if (staleScript && staleScript.parentNode) {
            staleScript.parentNode.removeChild(staleScript);
        }
        showNotice('The translator could not be loaded. Please try again.');
    }

    function startGoogleTranslation(language) {
        var requestedLanguage = normalizeLanguage(language);
        if (!requestedLanguage) return;

        googleTranslateTargetLanguage = requestedLanguage;
        googleTranslateRequest += 1;
        var requestId = googleTranslateRequest;
        ensureGoogleTranslateContainer();

        if (document.querySelector('.goog-te-combo')) {
            applyTranslation(requestedLanguage, 60);
            return;
        }

        if (isGoogleTranslateReady()) {
            initializeGoogleTranslate(requestedLanguage);
            return;
        }

        window.googleTranslateElementInit = function () {
            googleTranslateLoading = false;
            if (isGoogleTranslateReady()) {
                initializeGoogleTranslate(googleTranslateTargetLanguage);
            }
        };

        var existingScript = document.getElementById('google-translate-element-script');
        if (!googleTranslateLoading && !existingScript) {
            googleTranslateLoading = true;
            var script = document.createElement('script');
            script.id = 'google-translate-element-script';
            script.type = 'text/javascript';
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.onload = function () {
                waitForGoogleTranslate(googleTranslateTargetLanguage, 60, requestId);
            };
            script.onerror = function () {
                googleTranslateLoading = false;
                if (script.parentNode) script.parentNode.removeChild(script);
                showNotice('The translator could not be loaded. Please try again.');
            };
            document.body.appendChild(script);
            return;
        }

        // A previous click may already have inserted the loader. Wait for its
        // API instead of silently doing nothing; if it is stale, the timeout
        // removes it so the next click can load a fresh copy.
        waitForGoogleTranslate(requestedLanguage, 60, requestId);
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

    function bindTranslateButtons(root) {
        var scope = root && root.querySelectorAll ? root : document;
        var buttons = scope.querySelectorAll('.share-button.translate');

        for (var i = 0; i < buttons.length; i += 1) {
            var button = buttons[i];
            if (button.dataset.translateRoutingReady === 'true') continue;

            button.dataset.translateRoutingReady = 'true';
            button.removeAttribute('onclick');
            button.onclick = null;
            button.addEventListener('click', function (event) {
                event.preventDefault();
                translatePage(this.getAttribute('data-translate-language') || '');
            });
        }
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
        wrapper.lang = content.language;

        var panel = document.createElement('div');
        panel.dir = content.direction;
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

        panel.lang = content.language;
        panel.dir = content.direction;
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
    window.translateWithGoogle = startGoogleTranslation;

    if ('MutationObserver' in window) {
        var legacyObserver = new MutationObserver(function () {
            enhanceLegacyPrompt();
        });
        legacyObserver.observe(document.documentElement, { childList: true, subtree: true });
    }

    bindTranslateButtons();
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
