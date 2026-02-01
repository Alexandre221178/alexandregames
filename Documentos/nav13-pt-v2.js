 // atualizar somente os nav13-en-v2.js e nav13-pt-v2.js esses são com a bandeira no nav
document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
<style>
    .dropdown-content {
        max-height: 600px;
        overflow-y: auto;
    }
    
    .dropdown-content::-webkit-scrollbar {
        width: 20px;
    }
    
    .dropdown-content::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }
    
    .dropdown-content::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
        min-height: 40px;
    }
    
    .dropdown-content::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    /* Menu expansível */
    .expandable-menu {
        cursor: pointer;
        position: relative;
    }

    .expandable-menu::after {
        content: " ▼";
        font-size: 10px;
        margin-left: 5px;
    }

    .expandable-menu.expanded::after {
        content: " ▲";
    }

    .submenu-items {
        display: none;
        margin-left: 20px;
    }

    .submenu-items.show {
        display: block;
    }

    .submenu-items a {
        padding-left: 30px !important;
        font-size: 14px;
    }
</style>

<div class="logo">
    <a href="https://alexandregames.com/index-pt.html"><img src="https://alexandregames.com/imagens/exandregames318x318-removebg.webp" alt="logo Alexandre Games Mobile" title="logo Alexandre Games Mobile"></a>
</div>                     
<ul>             
<!-- Link oculto para troca de idioma 
<div class="dropdown">
    <button class="dropbtn"><span class="notranslate">Análises de Gameplay</span></button>
    <div class="dropdown-content"><br>
        
    <a href="https://alexandregames.com/gaming-guide/review/appgallery-review-pt.html">Como Instalar o AppGallery para Ganhar descontos em Hero Wars</a>
    <a href="https://alexandregames.com/hero-wars-alliance/guide/how-to-play-hero-wars-on-pc-and-mac-pt.html">Como Jogar Hero Wars Alliance no PC e Mac</a>
         
        <br><br><br>
            <br><br><br>
    </div>
</div>    
-->

<div class="dropdown">
    <button class="dropbtn"><span class="notranslate">Hero Wars Alliance</span></button>
    <div class="dropdown-content"><br>
        
    <a href="https://alexandregames.com/HeroWars.html">🆕 HWA - Atualizações</a>   
    <a href="https://alexandregames.com/y-m-gifts-hwa-en.html">🎁 HWA - Presentes Diários</a>
    <a href="https://alexandregames.com/hero-wars-alliance/menu-hwa/calendar-hwa-pt.html">📅 Calendário & Eventos</a>
        <a href="https://alexandregames.com/gaming-guide/review/appgallery-review-pt.html">💰 Ganhe Descontos</a>
                <a href="https://alexandregames.com/hero-wars-alliance/guide/counter-en-herowarsalliance.html">🎯 Guia de Counters</a>
    <a href="https://alexandregames.com/Hero%20Wars/Guiadeherois.html">📖 Guia de Heróis</a>   
    <a href="https://alexandregames.com/hero-wars-alliance/menu-best-teams-pt-hwa.html">👥 Guia de Melhores Times</a> 
    <a href="https://alexandregames.com/Hero%20Wars/Guia%20de%20Titans.html">⚔️ Guia de Titãs</a>                                 
    <a href="https://alexandregames.com/hero-wars-alliance/menu-tactics-secrets-hwa-en.html">📚 Guias & Segredos</a> 
    <a href="https://alexandregames.com/hero-wars-alliance/event-hwa/herosway-pt-hwa.html">🛤️ O Caminho do Herói</a> 
    <a href="https://alexandregames.com/hero-wars-alliance/menu-review-pt-hwa.html">🎨 Review de Skins</a> 
    <a href="https://alexandregames.com/Hero%20Wars/articles-herowars/tierlist-pt-pvp-herowars.html">🏆 Tier List</a> 
    
    
        
        <br><br><br><br>
        
    </div>  
</div>   

    <div class="dropdown">

<button class="dropbtn"><span class="notranslate">Hero Wars: Dominion Era</span></button>
<div class="dropdown-content"> <br>  
<a href="https://alexandregames.com/hero-wars-dominion-era/home/hwde-pt.html">🆕 HWDE - Atualizações</a>
<a href="https://alexandregames.com/y-redeem-gifts-hwde-en.html">🎁 HWDE Presentes Diários</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/menu/calendar-hwde-pt.html">📅 Calendário & Eventos</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/promo-code-hwde-pt.html">🎟️ Códigos Promocionais</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/menu/heroes-guide-hwde-pt.html">📖 Guia de Heróis</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/menu/pet-guide-menu-pt.html">🐾 Guia de Mascotes</a> 
    <a href="https://alexandregames.com/hero-wars-dominion-era/menu/titans-menu-hwde-pt.html">⚔️ Guia de Titãs</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/totems-guide-pt.html">🗿 Guia de Totens</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/totem-fusion-skills-pt.html">⚡ Fusão de Totens – Ranking</a>

<a href="https://alexandregames.com/hero-wars-dominion-era/guide/mysterious-island-pt.html">🏝️ Ilha Misteriosa Fev. 2026</a>
<a class="expandable-menu" onclick="toggleSubmenu(event, 'pet-maps-pt')">Mapas de Aventura de Pet</a>
<div id="pet-maps-pt" class="submenu-items">
    <a href="https://alexandregames.com/hero-wars-dominion-era/menu/adventure-map-guide-pt.html">Todos os Mapas</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-02-pt.html">Mapa 02</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-03-pt.html">Mapa 03</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-04-pt.html">Mapa 04</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-05-pt.html">Mapa 05</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-06-pt.html">Mapa 06</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-07-pt.html">Mapa 07</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-08-pt.html">Mapa 08</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-09-pt.html">Mapa 09</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-10-pt.html">Mapa 10</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-11-pt.html">Mapa 11</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-12-pt.html">Mapa 12</a>
</div>
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/best-war-flag-pt.html">⚔️ Melhores Bandeira de Guerra</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/heroes-rank-tier-list-pt.html">🏆 Tier List de Heróis</a>          
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/pets-tier-list-pt.html">🏆 Tier List de Mascotes</a>




<br><br><br><br>

</div>
</div>  
    
    <div class="dropdown">
        <button class="dropbtn"><span class="notranslate">Mobile Legends</span></button>
        <div class="dropdown-content"><br>
            
    <a href="https://alexandregames.com/MobileLegends.html">Guia de Heróis</a>
    <a href="https://alexandregames.com/mobile-legends/article-mlbb/tier-list-mlbb-pt.html">MLBB Tier List</a>
    <a href="https://alexandregames.com/mobile-legends/article-mlbb/gold-lane-guide-pt-mlbb.html">Guia da Rota do Ouro</a>
    <a href="https://alexandregames.com/mobile-legends/article-mlbb/roam-guide-mlbb-pt.html">Guia da Rotação</a>                              
            
            <br><br><br> <br><br><br>
        </div>
    </div>      

    
    <div class="dropdown">
        <button class="dropbtn"><a href="https://alexandregames.com/roblox-br.html">Roblox PC/Mobile</a></button>
        
    </div> 



<div class="dropdown">
<button class="dropbtn">Mais Jogos</button>
<div class="dropdown-content"><br>
    <a href="https://alexandregames.com/top-troops/top-troops-pt-home.html"><span class="notranslate">Top Troops</a>
    <a href="https://alexandregames.com/throne-and-liberty/menu-throne-and-liberty/menu-throne-and-liberty-pt.html"><span class="notranslate">Throne and Liberty</a>
    <a href="https://alexandregames.com/ragnarok-origin/codigos-ragnarok-br.html"><span class="notranslate">Ragnarok ROO</a>   
    <a href="https://alexandregames.com/gaming-guide/review/echoes-of-eternity-game-review-pt.html"><span class="notranslate">Echoes of Eternity</a>
    <a href="https://alexandregames.com/gaming-guide/review/path-of-exile-2-pt.html"><span class="notranslate">Path of Exile2 - Tier List</a>
    <a href="https://alexandregames.com/gaming-guide/review/tales-of-wind-review-pt.html"><span class="notranslate">Tales of Wind: RR</a>
    <a href="https://alexandregames.com/gaming-guide/review/the-dragon-odyssey-gameplay-pt.html"><span class="notranslate">The Dragon Odyssey</a>
    <a>_____________</a>
    <a href="https://alexandregames.com/Documentos/Contato.html">Contato</a>
       <a href="https://alexandregames.com/Documentos/Sobre.html">Sobre Nós</a>
   
    <br><br><br><br><br>
</div>
</div>
<div class="dropdown">
<button class="language-switch">
    <img src="https://alexandregames.com/imagens/flag-us-32x32.png" alt="bandeira USA" title="bandeira" USA style="width:24px;height:16px" >
    <strong>EN</strong>
</button>
</div>
</ul>
<div class="menu-icon">
    <img src="https://alexandregames.com/imagens/menu.png" alt="Menu" style="width:48px;height:48px;">
</div>
    `;

    const navElement = document.createElement('nav');
    navElement.innerHTML = navHTML;
    
    // Função para expandir/colapsar submenu
    window.toggleSubmenu = function(event, id) {
        event.preventDefault();
        event.stopPropagation();
        const submenu = document.getElementById(id);
        const menuItem = event.target;
        
        if (submenu.classList.contains('show')) {
            submenu.classList.remove('show');
            menuItem.classList.remove('expanded');
        } else {
            submenu.classList.add('show');
            menuItem.classList.add('expanded');
        }
    };
    document.querySelector('#menu-container').prepend(navElement);

   // Captura o botão de troca de idioma
const langButton = document.querySelector('.language-switch');

// Captura o link definido no HTML
const langLink = document.querySelector('.language-link');

if (langButton && langLink) {
    // Adiciona o link ao botão
    langButton.addEventListener('click', () => {
        window.location.href = langLink.href;
    });
}



 // Adiciona o nav
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
