
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

   
  // JavaScript para adicionar a mensagem no footer
  document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o elemento do footer onde a mensagem será adicionada
    var footerMessage = document.getElementById("message");
    // Cria um novo nó de texto contendo a mensagem desejada
    var messageText = document.createTextNode("©2024 Alexandre Games Blog");
    // Adiciona o nó de texto ao elemento do footer
    footerMessage.appendChild(messageText);
});
// FIM DO JavaScript para adicionar a mensagem no footer

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
  


