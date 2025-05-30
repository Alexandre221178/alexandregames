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
            src: "https://alexandregames.com/imagens/youtubeenglish.webp",
            alt: "Alexandre Games English Edition",
            title: "Alexandre Games English Edition"
        },
        {
            href: "https://www.youtube.com/channel/UCtzRcfrI2dlPB9gEN4h92Zg",
            src: "https://alexandregames.com/imagens/youtubebrazil.webp",
            alt: "Alexandre Games Official",
            title: "Alexandre Games Official"
        },
        {
            href: "http://facebook.com/profile.php?id=100093242163291",
            src: "https://alexandregames.com/imagens/facebookblack.webp",
            alt: "Alexandre Games Facebook",
            title: "Alexandre Games Facebook"
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
        { href: "https://alexandregames.com/Documentos/Sobre.html", text: "About Us" },
        { href: "https://alexandregames.com/Documentos/Contato.html", text: "Contact" },
        { href: "https://alexandregames.com/Documentos/aviso-legal.html", text: "Disclaimer" },
        { href: "https://alexandregames.com/Documentos/Pol%C3%ADtica%20de%20privacidade.html", text: "Privacy Policy" },
        { href: "https://alexandregames.com/Documentos/Termos%20de%20uso.html", text: "Terms of Use" }
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
    const messageText = document.createTextNode("©2023-2025 Alexandre Games Blog");
    footerMessage.appendChild(messageText);
});
