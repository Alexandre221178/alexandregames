function translatePage() {
    var userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.split('-')[0];

    var pageLang = 'ja'; // ページの元の言語

    // すでにユーザーの言語である場合 — 控えめなメッセージを表示し、何もしない
    if (userLang === pageLang) {
        showNotice("このページはすでにあなたの言語です。");
        return;
    }

    // 翻訳ツールがまだ読み込まれていない場合
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

// ---- 小さな視覚メッセージ ----
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