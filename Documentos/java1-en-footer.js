document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <div class="logo">
            <a href="https://alexandregames.com/"><img src="../imagens/exandregames318x318-removebg.webp" alt="Logo Alexandre Games" title="Alexandre Games - Página Inicial"></a>
        </div>                    
        <ul>                     
            <div class="dropdown">
                <button><a href="../herowars-alliance-pt.html">Hero Wars Alliance</a></button>
            </div>
            <div class="dropdown">
                <button><a href="../MobileLegends-Portuguese.html">Mobile Legends</a></button>
            </div>
            <div class="dropdown">
                <button><a href="../roblox-br.html">Roblox</a></button>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Mais</button>
                <div class="dropdown-content">
                    <a href="../Documentos/sobre.html">Sobre Nós</a>
                    <a href="../Documentos/contato.html">Contato</a>
                    <a href="../Documentos/aviso-legal.html">Aviso Legal</a>
                    <a href="../Documentos/politica-de-privacidade.html">Política de Privacidade</a>
                    <a href="../Documentos/termos-de-uso.html">Termos de Uso</a>
                </div>
            </div>
        </ul>
        <div class="menu-icon">
            <img src="../imagens/menu.png" alt="Menu" style="width:48px;height:48px;">
        </div>
    `;

    const navElement = document.createElement('nav');
    navElement.innerHTML = navHTML;
    document.querySelector('.container').prepend(navElement);

    // Move o botão de troca de idioma para dentro do nav
    const langButton = document.querySelector('.language-switch');
    navElement.querySelector('ul').appendChild(langButton);

    var menu = document.querySelector('nav ul');
    var menuBar = document.querySelector('nav .menu-icon');
    var iconMenu = document.querySelector('nav .menu-icon img');

    menuBar.addEventListener('click', function() {
        if (iconMenu.getAttribute("src") === '../imagens/close.webp') {
            iconMenu.setAttribute("src", "../imagens/menu.png");
        } else {
            iconMenu.setAttribute("src", "../imagens/close.webp");
        }
        
        menu.classList.toggle('active');
    });
});

// Última modificação início

// Função para extrair e exibir a data de modificação
function displayModificationDate() {
    var metaTags = document.getElementsByTagName('meta');
    var modificationDate;

    // Array com nomes dos meses
    var months = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    // Procura a meta tag com property="article:modified_time"
    for (var i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute('property') === 'article:modified_time') {
            modificationDate = metaTags[i].getAttribute('content');
            break;
        }
    }

    // Exibe a data de modificação na página
    if (modificationDate) {
        var formattedDate = new Date(modificationDate);
        var day = formattedDate.getDate();
        var month = months[formattedDate.getMonth()]; // Obtém o nome do mês
        var year = formattedDate.getFullYear();
        var dateElement = document.getElementById('data-modificacao');
        dateElement.textContent = 'Última atualização: ' + day + ' ' + month + ', ' + year;
    }
}

// Chama a função quando a página carrega
window.onload = displayModificationDate;

// Última modificação fim
