// Script to inject English footer content
document.addEventListener("DOMContentLoaded", function () {
    // 1. Add section title
    const socialLinksContainer = document.getElementById("social-links");
    const socialTitle = document.createElement("h2");
    socialTitle.textContent = "Follow Alexandre Games";
    socialTitle.classList.add("social-title"); // Add class for center alignment
    socialLinksContainer.appendChild(socialTitle);

    // 2. Add social media links
    const socialLinksData = [
        {
            href: "https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw",
            src: "https://alexandregames.com/imagens/youtube-black.webp",
            alt: "Alexandre Games Alliance",
            title: "Alexandre Games Alliance"
        },
        {
            href: "https://www.youtube.com/channel/UCtzRcfrI2dlPB9gEN4h92Zg",
            src: "https://alexandregames.com/imagens/youtube-black.webp",
            alt: "Alexandre Games Dominion",
            title: "Alexandre Games Dominion"
        },
        {
            href: "http://facebook.com/profile.php?id=100093242163291",
            src: "https://alexandregames.com/imagens/facebookblack.webp",
            alt: "Alexandre Games Facebook",
            title: "Alexandre Games Facebook"
        },
        
        {
            href: "https://discord.gg/37BRnhBv6r",
            src: "https://alexandregames.com/imagens/discord-black.webp",
            alt: "Alexandre Games Discord",
            title: "Join the Discord Community"
        },
        
        {
            href: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY",
            src: "https://alexandregames.com/imagens/logo-whatsapp.webp",
            alt: "Alexandre Games WhatsApp",
            title: "Join the WhatsApp Community"
        }
    ];

    socialLinksData.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.title = link.title;
        const img = document.createElement("img");
        img.src = link.src;
        img.alt = link.alt;
        a.appendChild(img);
        socialLinksContainer.appendChild(a);
    });

    // 3. Add navigation links
    const navLinksData = [
        { href: "https://alexandregames.com/Documentos/about.html", text: "About Us" },
        { href: "https://alexandregames.com/Documentos/Contact.html", text: "Contact" },
        { href: "https://alexandregames.com/Documentos/disclaimer.html", text: "Disclaimer" },
        { href: "https://alexandregames.com/Documentos/PrivacyPolicy.html", text: "Privacy Policy" },
        { href: "https://alexandregames.com/Documentos/TermsofUse.html", text: "Terms of Use" }
    ];

    const navigationLinksContainer = document.getElementById("navigation-links");
    navLinksData.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        navigationLinksContainer.appendChild(li);
    });

    // 4. Add copyright
    const footerMessage = document.getElementById("message");
const messageText = document.createTextNode("©2023-2026 Alexandre Games Blog - CNPJ 60.473.728/0001-62");
footerMessage.appendChild(messageText);

// Adiciona quebra de linha
const brEn = document.createElement("br");
footerMessage.appendChild(brEn);

const nicheTextEn = document.createTextNode("All content of Hero Wars (Alliance & Dominion Era), Mobile Legends, and Roblox is protected by copyright. Unauthorized reproduction or translation is prohibited.");
footerMessage.appendChild(nicheTextEn);});


// Script to inject traducao automatica

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
