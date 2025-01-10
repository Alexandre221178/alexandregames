// Chamada para injetar footer páginas em inglês no html 
  document.addEventListener("DOMContentLoaded", function() {
    // 1. Adicionar links de redes sociais
    const socialLinksData = [
        { href: "https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw", src: "https://alexandregames.com/imagens/youtubeenglish.webp", alt: "Alexandre Games Edição em Inglês", title: "Alexandre Games Edição em Inglês" },
        { href: "https://www.youtube.com/channel/UCtzRcfrI2dlPB9gEN4h92Zg", src: "https://alexandregames.com/imagens/youtubebrazil.webp", alt: "Alexandre Games Oficial", title: "Alexandre Games Oficial" },
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
        { href: "https://alexandregames.com/Documentos/Sobre.html", text: "Sobre Nós" },
        { href: "https://alexandregames.com/Documentos/Contato.html", text: "Contato" },
        { href: "https://alexandregames.com/Documentos/aviso-legal.html", text: "Isenção de Responsabilidade" },
        { href: "https://alexandregames.com/Documentos/Pol%C3%ADtica%20de%20privacidade.html", text: "Política de Privacidade" },
        { href: "https://alexandregames.com/Documentos/Termos%20de%20uso.html", text: "Termos de Uso" }
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

