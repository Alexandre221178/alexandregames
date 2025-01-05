// Chamada para injetar footer páginas em inglês no html 
  document.addEventListener("DOMContentLoaded", function() {
    // 1. Adicionar links de redes sociais
    const socialLinksData = [
        { href: "https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw", src: "https://alexandregames.com/imagens/youtubeenglish.webp", alt: "Alexandre Games English Edition", title: "Alexandre Games English Edition" },
        { href: "https://www.youtube.com/channel/UCtzRcfrI2dlPB9gEN4h92Zg", src: "https://alexandregames.com/imagens/youtubebrazil.webp", alt: "Alexandre Games Official", title: "Alexandre Games Official" },
        { href: "https://www.twitch.tv/ytalexandre", src: "https://alexandregames.com/imagens/twitchblack.webp", alt: "Alexandre Games Twitch", title: "Alexandre Games Twitch" }
    ];
    
    const socialLinksContainer = document.getElementById("social-links");
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

    // 2. Adicionar links de navegação
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

    // 3. Adicionar mensagem de direitos autorais
    const footerMessage = document.getElementById("message");
    const messageText = document.createTextNode("©2023-2025 Alexandre Games Blog");
    footerMessage.appendChild(messageText);
});

