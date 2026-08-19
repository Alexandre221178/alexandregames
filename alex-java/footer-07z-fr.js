// Script pour injecter le contenu du pied de page en français
document.addEventListener("DOMContentLoaded", function () {
    // 1. Ajouter le titre de la section
    const socialLinksContainer = document.getElementById("social-links");
    const socialTitle = document.createElement("h2");
    socialTitle.textContent = "Suivez Alexandre Games";
    socialTitle.classList.add("social-title"); // Classe pour centrer
    socialLinksContainer.appendChild(socialTitle);

    // 2. Ajouter les liens des réseaux sociaux
    const socialLinksData = [
        {
            href: "https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw",
            src: "https://alexandregames.com/imagens/youtubeenglish.webp",
            alt: "Alexandre Games Édition Anglaise",
            title: "Alexandre Games Édition Anglaise"
        },
        {
            href: "https://www.youtube.com/channel/UCtzRcfrI2dlPB9gEN4h92Zg",
            src: "https://alexandregames.com/imagens/youtubebrazil.webp",
            alt: "Alexandre Games Officiel",
            title: "Alexandre Games Officiel"
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
            alt: "Rejoignez la Communauté Discord",
            title: "Rejoignez la Communauté Discord"
        },
       
        {
            href: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY",
            src: "https://alexandregames.com/imagens/logo-whatsapp.webp",
            alt: "Rejoignez la Communauté WhatsApp",
            title: "Rejoignez la Communauté WhatsApp"
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

    // 3. Ajouter les liens de navigation
    const navLinksData = [
        { href: "https://alexandregames.com/Documentos/about.html", text: "À Propos de Nous" },
        { href: "https://alexandregames.com/Documentos/Contact.html", text: "Contact" },
        { href: "https://alexandregames.com/Documentos/disclaimer.html", text: "Avis de Non-Responsabilité" },
        { href: "https://alexandregames.com/Documentos/PrivacyPolicy.html", text: "Politique de Confidentialité" },
        { href: "https://alexandregames.com/Documentos/TermsofUse.html", text: "Conditions d'Utilisation" }
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

    // 4. Ajouter le copyright
   const footerMessage = document.getElementById("message");
const messageText = document.createTextNode("©2023-2026 Alexandre Games Blog - CNPJ 60.473.728/0001-62");
footerMessage.appendChild(messageText);

// Adiciona quebra de linha
const brFr = document.createElement("br");
footerMessage.appendChild(brFr);

const nicheTextFr = document.createTextNode("Tout le contenu de Hero Wars (Alliance & Dominion Era), Mobile Legends et Roblox est protégé par le droit d'auteur. La reproduction ou la traduction non autorisée est interdite.");
footerMessage.appendChild(nicheTextFr);});