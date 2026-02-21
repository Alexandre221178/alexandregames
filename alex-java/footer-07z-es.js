// Script para inyectar contenido del pie de página en español
document.addEventListener("DOMContentLoaded", function () {
    // 1. Agregar título de la sección
    const socialLinksContainer = document.getElementById("social-links");
    const socialTitle = document.createElement("h2");
    socialTitle.textContent = "Sigue a Alexandre Games";
    socialTitle.classList.add("social-title"); // Clase para centrar
    socialLinksContainer.appendChild(socialTitle);

    // 2. Agregar enlaces de redes sociales
    const socialLinksData = [
        {
            href: "https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw",
            src: "https://alexandregames.com/imagens/youtubeenglish.webp",
            alt: "Alexandre Games Edición en Inglés",
            title: "Alexandre Games Edición en Inglés"
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
            href: "https://www.twitch.tv/ytalexandre",
            src: "https://alexandregames.com/imagens/twitchblack.webp",
            alt: "Alexandre Games Twitch",
            title: "Alexandre Games Twitch"
        },
        {
            href: "https://discord.gg/37BRnhBv6r",
            src: "https://alexandregames.com/imagens/discord-black.webp",
            alt: "Únete a la Comunidad de Discord",
            title: "Únete a la Comunidad de Discord"
        },
        {
            href: "https://store.alexandregames.com/",
            src: "https://alexandregames.com/imagens/store.webp",
            alt: "Tienda Alexandre Games",
            title: "Tienda Alexandre Games"
        },
        {
            href: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY",
            src: "https://alexandregames.com/imagens/logo-whatsapp.webp",
            alt: "Únete a la Comunidad de WhatsApp",
            title: "Únete a la Comunidad de WhatsApp"
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

    // 3. Agregar enlaces de navegación
    const navLinksData = [
        { href: "https://alexandregames.com/Documentos/about.html", text: "Sobre Nosotros" },
        { href: "https://alexandregames.com/Documentos/Contact.html", text: "Contacto" },
        { href: "https://alexandregames.com/Documentos/disclaimer.html", text: "Descargo de Responsabilidad" },
        { href: "https://alexandregames.com/Documentos/PrivacyPolicy.html", text: "Política de Privacidad" },
        { href: "https://alexandregames.com/Documentos/TermsofUse.html", text: "Términos de Uso" }
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

    // 4. Agregar derechos de autor
    const footerMessage = document.getElementById("message");
const messageText = document.createTextNode("©2023-2026 Alexandre Games Blog - CNPJ 60.473.728/0001-62");
footerMessage.appendChild(messageText);

// Adiciona quebra de linha
const brEs = document.createElement("br");
footerMessage.appendChild(brEs);

const nicheTextEs = document.createTextNode("Todo el contenido de Hero Wars (Alliance & Dominion Era), Mobile Legends y Roblox está protegido por derechos de autor. La reproducción o traducción no autorizada está prohibida.");
footerMessage.appendChild(nicheTextEs);});