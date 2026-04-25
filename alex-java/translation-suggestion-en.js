(function() {
  const userLang = navigator.language || navigator.userLanguage;
  const siteLang = "en";

  const supportedLangs = ["pt","es","fr","de","it","pl","ru","ko","ja","zh"];

  if (localStorage.getItem("translateDismissed")) return;

  let lang = userLang.split("-")[0];

  if (!supportedLangs.includes(lang)) {
    lang = "en";
  }

  // não mostra se já for inglês
  if (lang === siteLang) return;

  const messages = {
    pt: "🌍 Ver esta página em português?",
    es: "🌍 ¿Ver esta página en español?",
    fr: "🌍 Voir cette page en français ?",
    de: "🌍 Diese Seite auf Deutsch anzeigen?",
    it: "🌍 Visualizzare questa pagina in italiano?",
    pl: "🌍 Wyświetlić tę stronę po polsku?",
    ru: "🌍 Показать эту страницу на русском?",
    ko: "🌍 이 페이지를 한국어로 보시겠습니까?",
    ja: "🌍 このページを日本語で表示しますか？",
    zh: "🌍 是否将此页面翻译为中文？",
    default: "🌍 View this page in your language?"
  };

  const text = messages[lang] || messages.default;

  setTimeout(() => {

    const banner = document.createElement("div");
    banner.innerHTML = `
      <div style="
        position:fixed;
        bottom:0px;
        left:20px;
        right:20px;
        background:#111;
        color:#fff;
        padding:15px;
        border-radius:10px;
        z-index:9999;
        font-size:14px;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;
      ">
        <span>${text}</span>
        <div>
          <button id="translateBtn" style="margin-right:10px; cursor:pointer;">OK</button>
          <button id="closeBtn" style="cursor:pointer;">✕</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    // ✅ aqui é a chave: chama seu sistema
    document.getElementById("translateBtn").onclick = function() {
      if (typeof translatePage === "function") {
        translatePage();
      }
      banner.remove();
    };

    document.getElementById("closeBtn").onclick = function() {
      localStorage.setItem("translateDismissed", "true");
      banner.remove();
    };

  }, 2500);

})();