document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <div class="logo">
            <a href="https://alexandregames.com/index-pt.html"><img src="https://alexandregames.com/imagens/exandregames318x318-removebg.webp" alt="logo Alexandre Games Mobile" title="logo Alexandre Games Mobile"></a>
        </div>                     
        <ul>                     
            <div class="dropdown">
                <button class="dropbtn">Hero Wars Alliance</button>
                <div class="dropdown-content">
                 
                <a href="https://alexandregames.com/herowars-alliance-pt.html">HWA - Início</a>  
                <a href="https://alexandregames.com/hero-wars-alliance/menu-best-teams-pt-hwa.html">Guia de Melhores Times</a>  
                <a href="https://alexandregames.com/Hero%20Wars/calendar-event-pt-hwa.html">Calendário & Eventos</a>
                <a href="https://alexandregames.com/hero-wars-alliance/event-hwa/herosway-pt-hwa.html">Caminho do Herói</a>  
                <a href="https://alexandregames.com/Hero%20Wars/Guiadeherois.html">Guia de Heróis</a>  
                <a href="https://alexandregames.com/hero-wars-alliance/menu-review-pt-hwa.html">Análises de Skins</a>  
                <a href="https://alexandregames.com/hero-wars-alliance/menu-tactics-secrets-hwa-en.html">Táticas & Segredos</a>  
                <a href="https://alexandregames.com/Hero%20Wars/Guia%20de%20Titans.html">Guia de Titãs</a>  
                    
                   <br><br><br>
                </div>  
            </div>           
            <div class="dropdown">
                <button class="dropbtn"><a href="https://alexandregames.com/MobileLegends.html">Mobile Legends</a></button>
                
            </div> 
            <div class="dropdown">
                <button class="dropbtn"><a href="https://alexandregames.com/roblox-br.html">Roblox PC/Mobile</a></button>
                
            </div> 
<div class="dropdown">
            <button><a href="https://alexandregames.com/top-troops/top-troops-pt-home.html">Top Troops</a></button> 
            </div>

             <div class="dropdown">
               <button><a href="https://alexandregames.com/throne-and-liberty/menu-throne-and-liberty/menu-throne-and-liberty-pt.html">Throne and Liberty</a></button>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Mais Jogos</button>
                <div class="dropdown-content">
                    <a href="https://alexandregames.com/ragnarok-origin/codigos-ragnarok-br.html">Ragnarok ROO</a>
                    <a>_____________</a>
                    <a href="https://alexandregames.com/Documentos/Contato.html">Contato</a>
                    <a href="https://alexandregames.com/Documentos/aviso-legal.html">Isenção de Responsabilidade</a>
                    <a href="https://alexandregames.com/Documentos/Pol%C3%ADtica%20de%20privacidade.html">Política de Privacidade</a>
                    <a href="https://alexandregames.com/Documentos/Sobre.html">Sobre Nós</a>
                    <a href="https://alexandregames.com/Documentos/Termos%20de%20uso.html">Termos de Uso</a>
                    <br><br><br>
                </div>
            </div>
        </ul>
        <div class="menu-icon">
            <img src="https://alexandregames.com/imagens/menu.png" alt="Menu" style="width:48px;height:48px;">
        </div>
    `;

    const navElement = document.createElement('nav');
    navElement.innerHTML = navHTML;
    document.querySelector('#menu-container').prepend(navElement);

    // Move the language switch button inside the nav
    const langButton = document.querySelector('.language-switch');
    if (langButton) {
        navElement.querySelector('ul').appendChild(langButton);
    }

    const menu = document.querySelector('nav ul');
    const menuBar = document.querySelector('nav .menu-icon');
    const iconMenu = document.querySelector('nav .menu-icon img');

    menuBar.addEventListener('click', function() {
        if (iconMenu.getAttribute("src") === 'https://alexandregames.com/imagens/close.webp') {
            iconMenu.setAttribute("src", "https://alexandregames.com/imagens/menu.png");
        } else {
            iconMenu.setAttribute("src", "https://alexandregames.com/imagens/close.webp");
        }
        
        menu.classList.toggle('active');
    });
});

// Function to extract and display modification date
function displayModificationDate() {
    var metaTags = document.getElementsByTagName('meta');
    var modificationDate;

    // Array com nomes dos meses
    var months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Encontrar a meta tag com property="article:modified_time"
    for (var i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute('property') === 'article:modified_time') {
            modificationDate = metaTags[i].getAttribute('content');
            break;
        }
    }

    // Exibir a data de modificação na página
    if (modificationDate) {
        var formattedDate = new Date(modificationDate);
        var day = formattedDate.getDate();
        var month = months[formattedDate.getMonth()]; // Obter o nome do mês
        var year = formattedDate.getFullYear();
        var dateElement = document.getElementById('data-modificacao');
        dateElement.textContent = 'Última atualização: ' + day + ' de ' + month + ' de ' + year;
    }
}

// Chamar a função quando a página carregar
window.onload = displayModificationDate;