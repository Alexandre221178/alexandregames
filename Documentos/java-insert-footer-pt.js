
//  cookies alexandregames
document.addEventListener("DOMContentLoaded", function() {
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const rejectCookiesBtn = document.getElementById('reject-cookies');
    const cookieBanner = document.getElementById('cookie-banner');

    acceptCookiesBtn.addEventListener('click', function() {
        setCookie('cookie_consent', 'accepted', 365);
        cookieBanner.style.display = 'none';
    });

    rejectCookiesBtn.addEventListener('click', function() {
        setCookie('cookie_consent', 'rejected', 180);
        cookieBanner.style.display = 'none';
    });

    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
    }

    function getCookie(name) {
        const cookieArray = document.cookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            const cookiePair = cookieArray[i].split('=');
            if (name === cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }

    const consent = getCookie('cookie_consent');
    if (consent === 'accepted' || consent === 'rejected') {
        cookieBanner.style.display = 'none';
    }
});
  //  fim do cookies alexandregames

   
  

//  botao graphcomments
document.getElementById('loadScript').addEventListener('click', function() {
    // Ocultar o botão depois de clicado
    this.style.display = 'none';
  
    // Ocultar o parágrafo
    var commentParagraph = document.getElementById('commentParagraph');
    if (commentParagraph) {
      commentParagraph.style.display = 'none';
    }
  
    // Exibir a mensagem de carregamento
    document.getElementById('loadingMessage').style.display = 'block';
  
    // Chamada para a função de carregamento de comentários
    loadComments();
  });
  


  // Chamada para injetar footer Páginas em português no html 
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
    const messageText = document.createTextNode("©2023-2024 Alexandre Games Blog");
    footerMessage.appendChild(messageText);
});



