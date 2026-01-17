function translatePage() {
    var userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.split('-')[0];

    var pageLang = 'es'; // idioma original de la página

    // Si ya está en el idioma del usuario — muestra un mensaje discreto y no hace nada
    if (userLang === pageLang) {
        showNotice("Esta página ya está en tu idioma.");
        return;
    }

    // Si el traductor aún no se ha cargado
    if (!window.googleTranslateElementInit) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
        
        window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({
                pageLanguage: pageLang
            }, 'google_translate_element');

            setTimeout(() => applyTranslation(userLang), 500);
        };
    } else {
        applyTranslation(userLang);
    }
}

function applyTranslation(lang) {
    var select = document.querySelector(".goog-te-combo");
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
    }
}

// ---- pequeño mensaje visual ----
function showNotice(msg) {
    const div = document.createElement("div");
    div.className = "lang-notice";
    div.innerText = msg;

    document.body.appendChild(div);

    setTimeout(() => {
        div.style.opacity = "0";
        setTimeout(() => div.remove(), 400);
    }, 1800);
}