function translatePage() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    };
}