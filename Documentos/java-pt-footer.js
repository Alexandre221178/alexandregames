var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == '../imagens/close.webp') {
        iconMenu.setAttribute("src","../imagens/menu.png");
    }else{
        iconMenu.setAttribute("src","../imagens/close.webp");
    }
    
    menu.classList.toggle('active')
});


// last modified inicio


// Função para extrair e exibir a data de modificação
function exibirDataModificacao() {
    var metaTags = document.getElementsByTagName('meta');
    var dataModificacao;

    // Array com os nomes dos meses por extenso
    var meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Procurar pela tag meta com property="article:modified_time"
    for (var i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute('property') === 'article:modified_time') {
            dataModificacao = metaTags[i].getAttribute('content');
            break;
        }
    }

    // Exibir a data de modificação na página
    if (dataModificacao) {
        var dataFormatada = new Date(dataModificacao);
        var dia = dataFormatada.getDate();
        var mes = meses[dataFormatada.getMonth()]; // Obtém o nome do mês
        var ano = dataFormatada.getFullYear();
        var elementoData = document.getElementById('data-modificacao');
        elementoData.textContent = 'Última Atualização: ' + dia + ' de ' + mes + ' de ' + ano;
    }
}

// Chamar a função ao carregar a página
window.onload = exibirDataModificacao;


    
// last modified fim




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
        setCookie('cookie_consent', 'rejected', 365);
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
  