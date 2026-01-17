function translatePage() {
    var userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.split('-')[0];

    var pageLang = 'fr'; // langue originale de la page

    // Si c'est déjà dans la langue de l'utilisateur — affiche un message discret et ne fait rien
    if (userLang === pageLang) {
        showNotice("Cette page est déjà dans votre langue.");
        return;
    }

    // Si le traducteur n'a pas encore été chargé
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

// ---- petit message visuel ----
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