document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <div class="logo">
            <a href="https://alexandregames.com/index-pt.html"><img src="../../imagens/exandregames318x318-removebg.webp" alt="logo Alexandre Games Mobile" title="logo Alexandre Games Mobile"></a>
        </div>                    
        <ul>                     
            <li class="dropdown">
                <a href="../../HeroWars.html">Hero Wars Alliance</a>
            </li>              
            <li class="dropdown">
                <a href="../../MobileLegends.html">Mobile Legends</a>
            </li> 
            <li class="dropdown">
                <a href="../../roblox-br.html">Roblox</a>
            </li> 
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Top Troops</a>
                <div class="dropdown-content">
                    <a href="../../top-troops/tips-and-tricks-pt-top-troops.html">Dicas e Truques</a>
                    <a href="../../top-troops/top-troops-pt-tier-list.html">Tier List</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Mais</a>
                <div class="dropdown-content">
                    <a href="../../ragnarok-origin/codigos-ragnarok-br.html">Ragnarok ROO</a>
                    <a>_____________</a>
                    <a href="../../Documentos/Contato.html">Contato</a>
                    <a href="../../Documentos/aviso-legal.html">Isenção de Responsabilidade</a>
                    <a href="../../Documentos/Política de privacidade.html">Política de Privacidade</a>
                    <a href="../../Documentos/Sobre.html">Sobre Nós</a>                   
                    <a href="../../Documentos/Termos de uso.html">Termos de Uso</a>
                </div>
            </li>
        </ul>
        <div class="menu-icon">
            <img src="../../imagens/menu.png" alt="Menu" style="width:48px;height:48px;">
        </div>
    `;

    const navElement = document.createElement('nav');
    navElement.innerHTML = navHTML;
    const navPlaceholder = document.getElementById('nav-placeholder');
    navPlaceholder.replaceWith(navElement);

    // Move the language switch button inside the nav
    const langButton = document.querySelector('.language-switch');
    if (langButton) {
        navElement.querySelector('ul').appendChild(langButton);
    }

    var menu = document.querySelector('nav ul');
    var menuBar = document.querySelector('nav .menu-icon');
    var iconMenu = document.querySelector('nav .menu-icon img');

    menuBar.addEventListener('click', function() {
        if (iconMenu.getAttribute("src") === '../../imagens/close.webp') {
            iconMenu.setAttribute("src", "../../imagens/menu.png");
        } else {
            iconMenu.setAttribute("src", "../../imagens/close.webp");
        }
        
        menu.classList.toggle('active');
    });
});

// Código para exibir a data de modificação
document.addEventListener('DOMContentLoaded', () => {
    function displayModificationDate() {
        var metaTags = document.getElementsByTagName('meta');
        var modificationDate;

        // Array com nomes dos meses
        var months = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        // Encontra a meta tag com a propriedade "article:modified_time"
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
            dateElement.textContent = 'Última atualização: ' + month + ' ' + day + ', ' + year;
        }
    }

    // Chama a função quando a página carregar
    displayModificationDate();
});

