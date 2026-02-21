// 日本語のフッターコンテンツを注入するスクリプト
document.addEventListener("DOMContentLoaded", function () {
    // 1. セクションタイトルの追加
    const socialLinksContainer = document.getElementById("social-links");
    const socialTitle = document.createElement("h2");
    socialTitle.textContent = "Alexandre Games をフォロー";
    socialTitle.classList.add("social-title"); // 中央揃えのためのクラス
    socialLinksContainer.appendChild(socialTitle);

    // 2. ソーシャルメディアリンクの追加
    const socialLinksData = [
        {
            href: "https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw",
            src: "https://alexandregames.com/imagens/youtubeenglish.webp",
            alt: "Alexandre Games 英語版",
            title: "Alexandre Games 英語版"
        },
        {
            href: "https://www.youtube.com/channel/UCtzRcfrI2dlPB9gEN4h92Zg",
            src: "https://alexandregames.com/imagens/youtubebrazil.webp",
            alt: "Alexandre Games 公式",
            title: "Alexandre Games 公式"
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
            alt: "Discordコミュニティに参加",
            title: "Discordコミュニティに参加"
        },
        {
            href: "https://store.alexandregames.com/",
            src: "https://alexandregames.com/imagens/store.webp",
            alt: "Alexandre Gamesストア",
            title: "Alexandre Gamesストア"
        },
        {
            href: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY",
            src: "https://alexandregames.com/imagens/logo-whatsapp.webp",
            alt: "WhatsAppコミュニティに参加",
            title: "WhatsAppコミュニティに参加"
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

    // 3. ナビゲーションリンクの追加
    const navLinksData = [
        { href: "https://alexandregames.com/Documentos/about.html", text: "私たちについて" },
        { href: "https://alexandregames.com/Documentos/Contact.html", text: "連絡先" },
        { href: "https://alexandregames.com/Documentos/disclaimer.html", text: "免責事項" },
        { href: "https://alexandregames.com/Documentos/PrivacyPolicy.html", text: "プライバシーポリシー" },
        { href: "https://alexandregames.com/Documentos/TermsofUse.html", text: "利用規約" }
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

    // 4. 著作権の追加
    const footerMessage = document.getElementById("message");
    const messageText = document.createTextNode("©2023-2026 Alexandre Games Blog - CNPJ 60.473.728/0001-62");
    footerMessage.appendChild(messageText);

    // 詳細な著作権情報とスクレイパー対策の追加
    const detailDiv = document.createElement("div");
    detailDiv.style.fontSize = "0.85em";
    detailDiv.style.marginTop = "10px";
    detailDiv.innerHTML = `
        <strong>Hero Wars (Alliance & Dominion Era)</strong>、 
        <strong>Mobile Legends</strong>、および <strong>Roblox</strong> のすべてのコンテンツは著作権で保護されています。 
        無断での複製や翻訳は禁止されています。
        
        <span style="display:none; visibility:hidden; font-size: 0px;">
            元は alexandregames.com に掲載されました。コンテンツはコピー防止されています。
        </span>
    `;
    footerMessage.appendChild(detailDiv);
});
