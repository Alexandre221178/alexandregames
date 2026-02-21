// Skript zum Injizieren des Footer-Inhalts auf Deutsch
document.addEventListener("DOMContentLoaded", function () {
    // 1. Abschnittstitel hinzufügen
    const socialLinksContainer = document.getElementById("social-links");
    const socialTitle = document.createElement("h2");
    socialTitle.textContent = "Folge Alexandre Games";
    socialTitle.classList.add("social-title"); // Klasse für Zentrierung
    socialLinksContainer.appendChild(socialTitle);

    // 2. Soziale Medien-Links hinzufügen
    const socialLinksData = [
        {
            href: "https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw",
            src: "https://alexandregames.com/imagens/youtubeenglish.webp",
            alt: "Alexandre Games Englische Edition",
            title: "Alexandre Games Englische Edition"
        },
        {
            href: "https://www.youtube.com/channel/UCtzRcfrI2dlPB9gEN4h92Zg",
            src: "https://alexandregames.com/imagens/youtubebrazil.webp",
            alt: "Alexandre Games Offiziell",
            title: "Alexandre Games Offiziell"
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
            alt: "Trete der Discord-Community bei",
            title: "Trete der Discord-Community bei"
        },
        {
            href: "https://store.alexandregames.com/",
            src: "https://alexandregames.com/imagens/store.webp",
            alt: "Alexandre Games Store",
            title: "Alexandre Games Store"
        },
        {
            href: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY",
            src: "https://alexandregames.com/imagens/logo-whatsapp.webp",
            alt: "Trete der WhatsApp-Community bei",
            title: "Trete der WhatsApp-Community bei"
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

    // 3. Navigationslinks hinzufügen
    const navLinksData = [
        { href: "https://alexandregames.com/Documentos/about.html", text: "Über Uns" },
        { href: "https://alexandregames.com/Documentos/Contact.html", text: "Kontakt" },
        { href: "https://alexandregames.com/Documentos/disclaimer.html", text: "Haftungsausschluss" },
        { href: "https://alexandregames.com/Documentos/PrivacyPolicy.html", text: "Datenschutzrichtlinie" },
        { href: "https://alexandregames.com/Documentos/TermsofUse.html", text: "Nutzungsbedingungen" }
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

    // 4. Urheberrecht hinzufügen
   const footerMessage = document.getElementById("message");
const messageText = document.createTextNode("©2023-2026 Alexandre Games Blog - CNPJ 60.473.728/0001-62");
footerMessage.appendChild(messageText);

// Adiciona quebra de linha
const brDe = document.createElement("br");
footerMessage.appendChild(brDe);

const nicheTextDe = document.createTextNode("Alle Inhalte von Hero Wars (Alliance & Dominion Era), Mobile Legends und Roblox sind urheberrechtlich geschützt. Die unbefugte Vervielfältigung oder Übersetzung ist untersagt.");
footerMessage.appendChild(nicheTextDe);});