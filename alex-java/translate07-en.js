function translatePage() {
    var userLang = navigator.language || navigator.userLanguage; // Detecta o idioma do navegador
    userLang = userLang.split('-')[0]; // Pega apenas a parte principal do idioma (ex: 'pt' de 'pt-BR')

    if (!window.googleTranslateElementInit) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
        
        window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({
                pageLanguage: 'en' // Idioma original da página
            }, 'google_translate_element');

            setTimeout(() => applyTranslation(userLang), 500); // Aplica a tradução após carregamento
        };
    } else {
        applyTranslation(userLang);
    }
}

function applyTranslation(lang) {
    var select = document.querySelector(".goog-te-combo"); // Localiza o seletor de idioma do Google Tradutor
    if (select) {
        select.value = lang; // Define o idioma detectado
        select.dispatchEvent(new Event("change")); // Simula a troca do idioma
    }
}

