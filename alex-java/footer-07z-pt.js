// Script para injetar conteúdo do rodapé em português
document.addEventListener("DOMContentLoaded", function () {
    // 1. Adicionar título da seção
    const socialLinksContainer = document.getElementById("social-links");
    const socialTitle = document.createElement("h2");
    socialTitle.textContent = "Siga Alexandre Games:";
    socialTitle.classList.add("social-title"); // Classe para centralizar
    socialLinksContainer.appendChild(socialTitle);

    // 2. Adicionar links de redes sociais
    const socialLinksData = [
        {
            href: "https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw",
            src: "https://alexandregames.com/imagens/youtubeenglish.webp",
            alt: "Alexandre Games Edição em Inglês",
            title: "Alexandre Games Edição em Inglês"
        },
        {
            href: "https://www.youtube.com/channel/UCtzRcfrI2dlPB9gEN4h92Zg",
            src: "https://alexandregames.com/imagens/youtubebrazil.webp",
            alt: "Alexandre Games Oficial",
            title: "Alexandre Games Oficial"
        },
        {
            href: "http://facebook.com/profile.php?id=100093242163291",
            src: "https://alexandregames.com/imagens/facebookblack.webp",
            alt: "Alexandre Games Facebook",
            title: "Alexandre Games Facebook"
        },
        {
            href: "https://www.instagram.com/alexandregames.oficial/",
            src: "https://alexandregames.com/imagens/instagram.webp",
            alt: "Alexandre Games Instagram",
            title: "Alexandre Games Instagram"
        },
        {
            href: "https://www.twitch.tv/ytalexandre",
            src: "https://alexandregames.com/imagens/twitchblack.webp",
            alt: "Alexandre Games Twitch",
            title: "Alexandre Games Twitch"
        },
        {
            href: "https://discord.gg/37BRnhBv6r",
            src: "https://alexandregames.com/imagens/discord-black.webp",
            alt: "Comunidade no Discord",
            title: "Comunidade Discord"
        },
        {
            href: "https://store.alexandregames.com/",
            src: "https://alexandregames.com/imagens/store.webp",
            alt: "Store Alexandre Games",
            title: "Store Alexandre Games"
        },
        {
            href: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY",
            src: "https://alexandregames.com/imagens/logo-whatsapp.webp",
            alt: "Comunidade no WhatsApp",
            title: "Comunidade Whatsapp"
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

    // 3. Adicionar links de navegação
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

    // 4. Adicionar mensagem de direitos autorais
    const footerMessage = document.getElementById("message");
    const messageText = document.createTextNode("©2023-2025 Alexandre Games Blog - CNPJ 60.473.728/0001-62");
    footerMessage.appendChild(messageText);
});
