// nav13-global-es.js - Navegación en Español (links en inglés)
document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
<style>
    .dropdown-content {
        max-height: 300px;
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
        min-height: 20px;
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

    /* Language dropdown styles */
    .language-dropdown {
        position: relative;
        display: inline-block;
    }

    .language-switch {
        font-size: 15px !important;
        background-color: #040404ff;
        color: white;
        padding: 10px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .language-switch:hover {
        background-color: #040404ff;
    }

    .language-dropdown-content {
        display: none;
        position: absolute;
        background-color: #040404ff;
        min-width: 180px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1000;
        border-radius: 5px;
        right: 0;
        left: auto;
        top: 100%;
        margin-top: 0;
        padding-top: 5px;
    }

    .language-dropdown-content a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .language-dropdown-content a:first-child {
        padding-top: 15px;
    }

    .language-dropdown-content a:hover {
        background-color: #333333ff;
    }

    .language-dropdown:hover .language-dropdown-content {
        display: block;
    }

    .language-dropdown::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        height: 5px;
        display: none;
    }

    .language-dropdown:hover::before {
        display: block;
    }
</style>

<div class="logo">
    <a href="https://alexandregames.com/"><img src="https://alexandregames.com/imagens/exandregames318x318-removebg.webp" alt="Alexandre Games Mobile Logo" title="Alexandre Games Mobile Logo" width="50" height="50"></a>
</div>

<ul> 
<!-- Link oculto para troca de idioma 
<div class="dropdown">
    <button class="dropbtn"><span class="notranslate">Reseñas</span></button>
    <div class="dropdown-content"><br>
        <a href="https://alexandregames.com/gaming-guide/review/appgallery-review-en.html">Cómo instalar AppGallery para obtener descuentos en Hero Wars</a>   
        <a href="https://alexandregames.com/hero-wars-alliance/guide/how-to-play-hero-wars-on-pc-and-mac-en.html">Cómo jugar Hero Wars Alliance en PC y Mac</a> 
        <br><br><br>
        <br><br><br>
    </div>
</div>    
-->
<div class="dropdown">
   <button class="dropbtn"><span class="notranslate">Hero Wars Alliance</span></button>
    <div class="dropdown-content"> <br>                
        <a href="https://alexandregames.com/hero-wars-alliance/home/hwa-index-es.html">🆕 HWA - Últimas Novedades</a>
        <a href="https://alexandregames.com/y-m-gifts-hwa-en.html">🎁 HWA - Regalos Diarios</a>
        <a href="https://alexandregames.com/hero-wars-alliance/menu-hwa/calendar-hwa-es.html">📅 HWA - Calendario y Eventos</a>
        <a href="https://alexandregames.com/Hero%20Wars%20English/Heroes%20Guide%20Hero%20Wars.html">📖 Guía de Personajes</a>
        <a href="https://alexandregames.com/hero-wars-alliance/guide/talisman-guide-hwa-es.html">📿 Guía de Todos los Talismanes</a>
        <a href="https://alexandregames.com/hero-wars-alliance/menu-tactics-secrets-hwa-en.html">📚 Guías para Principiantes y Secretos</a>
        <a href="https://alexandregames.com/Hero%20Wars/articles-herowars/tierlist-en-pvp-herowars.html">🏆 Mejor Tier List</a>
        <a href="https://alexandregames.com/hero-wars-alliance/menu-best-teams-en-hwa.html">👥 Guía de Mejores Equipos</a>
        <a href="https://alexandregames.com/hero-wars-alliance/guide/counter-en-herowarsalliance.html">🎯 Guía de Counters</a>
        <a href="https://alexandregames.com/hero-wars-alliance/menu-review-en-hwa.html">🎨 Reseñas, Consejos y Estrategias</a>
        <a href="https://alexandregames.com/Hero%20Wars%20English/Titans%20Guide%20Hero%20Wars.html">⚔️ Guía de Titanes</a>
        <br><br><br><br>
    </div>
</div>  

<div class="dropdown">
    <button class="dropbtn"><span class="notranslate">Hero Wars: Dominion Era</span></button>
    <div class="dropdown-content"> <br>  
        <a href="https://alexandregames.com/hero-wars-dominion-era/home/hwde-es.html">🆕 HWDE - Últimas Novedades</a>
        <a href="https://alexandregames.com/y-redeem-gifts-hwde-en.html">🎁 HWDE - Regalos Diarios</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/menu/calendar-hwde-es.html">📅 HWDE - Calendario y Eventos</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/guide/best-war-flag-en.html">⚔️ Mejores Banderas de Guerra</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/menu/heroes-guide-hwde-en.html">📖 Guía de Héroes</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/guide/heroes-rank-tier-list-en.html">🏆 Tier List de Héroes</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/guide/mysterious-island-es.html">🏝️ Isla Misteriosa 03/2026</a>
        <a class="expandable-menu" onclick="toggleSubmenu(event, 'pet-maps')">Mapas de Aventura de Mascotas</a>
        <div id="pet-maps" class="submenu-items">
            <a href="https://alexandregames.com/hero-wars-dominion-era/menu/adventure-map-guide-en.html">Guía de Todos los Mapas</a>
            <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-02-en.html">Mapa 02</a>
            <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-03-en.html">Mapa 03</a>
            <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-04-en.html">Mapa 04</a>
            <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-05-en.html">Mapa 05</a>
            <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-06-en.html">Mapa 06</a>
            <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-07-en.html">Mapa 07</a>
            <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-08-en.html">Mapa 08</a>
            <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/siege-of-strongford-en.html">Mapa 09</a>
            <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-10-en.html">Mapa 10</a>
            <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-11-en.html">Mapa 11</a>
            <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-12-en.html">Mapa 12</a>
        </div>
        <a href="https://alexandregames.com/hero-wars-dominion-era/menu/pet-guide-menu-en.html">🐾 Guía de Mascotas</a>   
        <a href="https://alexandregames.com/hero-wars-dominion-era/guide/pets-tier-list-en.html">🏆 Tier List de Mascotas</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/guide/promo-code-hwde-en.html">🎟️ Códigos Promocionales</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/menu/titans-menu-hwde-en.html">⚔️ Guía de Titanes</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/guide/totem-fusion-skills-en.html">⚡ Habilidades de Fusión de Tótem</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/guide/totems-guide-en.html">🗿 Guía de Tótems</a>
        <br><br><br><br>
    </div>
</div>  

<div class="dropdown">
    <button class="dropbtn"><span class="notranslate">Mobile Legends</span></button>
    <div class="dropdown-content"><br>
        <a href="https://alexandregames.com/MobileLegends-English.html">Guía de Héroes</a>
        <a href="https://alexandregames.com/mobile-legends/article-mlbb/tier-list-mlbb-en.html">Tier List MLBB</a>
        <a href="https://alexandregames.com/mobile-legends/article-mlbb/gold-lane-guide-en-mlbb.html">Guía de Gold Lane</a>
        <a href="https://alexandregames.com/mobile-legends/article-mlbb/roam-guide-mlbb-en.html">Guía de Roam Lane</a>          
        <br><br><br>
    </div>
</div>      

<div class="dropdown">
    <button class="dropbtn"><a href="https://alexandregames.com/roblox-us.html">Roblox PC/Mobile</a></button>
</div> 

    <div class="dropdown">
        <button class="dropbtn">Más Juegos</button>
        <div class="dropdown-content"><br>
            <a href="https://alexandregames.com/top-troops/top-troops-en-home.html"><span class="notranslate">Top Troops</span></a>
            <a href="https://alexandregames.com/throne-and-liberty/menu-throne-and-liberty/menu-throne-and-liberty-en.html"><span class="notranslate">Throne and Liberty</span></a>
            <a href="https://alexandregames.com/ragnarok-origin/codes-ragnarok-us.html"><span class="notranslate">Ragnarok ROO</span></a>
            <a href="https://alexandregames.com/gaming-guide/review/tales-of-wind-review-en.html"><span class="notranslate">Tales of Wind: RR</span></a>
            <a href="https://alexandregames.com/gaming-guide/review/the-dragon-odyssey-gameplay-en.html"><span class="notranslate">The Dragon Odyssey</span></a>                    
            <a href="https://alexandregames.com/gaming-guide/review/echoes-of-eternity-game-review-en.html"><span class="notranslate">Echoes of Eternity</span></a>
            <a href="https://alexandregames.com/gaming-guide/review/path-of-exile-2-en.html"><span class="notranslate">Path of Exile 2 - Tier List</span></a>
            <a>_____________</a>
            <a href="https://alexandregames.com/Documentos/Contact.html">Contacto</a>            
            <a href="https://alexandregames.com/Documentos/about.html">Sobre Nosotros</a>
            <br><br><br><br><br>
        </div>
    </div>
    <div class="language-dropdown">
        <button class="language-switch">
            <strong>🌎Global</strong>
        </button>
        <div class="language-dropdown-content">
            <a href="#" class="lang-option" data-lang="pt">
                <img src="https://alexandregames.com/imagens/flag-brazil-32x32.png" alt="Brazil flag" title="Brazil flag" style="width:24px;height:16px">
                <strong>PT</strong>
            </a>
            <a href="#" class="lang-option" data-lang="en">
                <img src="https://alexandregames.com/imagens/flag-usa-32x32.png" alt="USA flag" title="USA flag" style="width:24px;height:16px">
                <strong>EN</strong>
            </a>
            <a href="#" class="lang-option" data-lang="es">
                <img src="https://alexandregames.com/imagens/flag-spain-32x32.png" alt="Spain flag" title="Spain flag" style="width:24px;height:16px">
                <strong>ES</strong>
            </a>
            <a href="#" class="lang-option" data-lang="de">
                <img src="https://alexandregames.com/imagens/flag-germany-32x32.png" alt="Germany flag" title="Germany flag" style="width:24px;height:16px">
                <strong>DE</strong>
            </a>
            <a href="#" class="lang-option" data-lang="fr">
                <img src="https://alexandregames.com/imagens/flag-france-32x32.png" alt="France flag" title="France flag" style="width:24px;height:16px">
                <strong>FR</strong>
            </a>
            <a href="#" class="lang-option" data-lang="ja">
                <img src="https://alexandregames.com/imagens/flag-japan-32x32.png" alt="Japan flag" title="Japan flag" style="width:24px;height:16px">
                <strong>JA</strong>
            </a>
            <br>
        </div>
    </div>
    </ul>
    <div class="menu-icon">
        <img src="https://alexandregames.com/imagens/menu.png" alt="Menu" style="width:48px;height:48px;">
    </div>
    `;

    const navElement = document.createElement('nav');
    navElement.innerHTML = navHTML;
    const menuContainer = document.querySelector('#menu-container');
    if (menuContainer) {
        menuContainer.prepend(navElement);
    }

    // Marcar links que apontam para páginas em inglês com " (EN)"
    try {
        navElement.querySelectorAll('a').forEach(a => {
            const href = a.getAttribute('href') || '';
            if (href.includes('-en.html') || href.includes('Hero%20Wars%20English') || href.includes('MobileLegends-English') || href.includes('herowars-alliance-en.html')) {
                if (!a.textContent.includes('(EN)')) a.textContent = a.textContent + ' (EN)';
            }
        });
    } catch (e) {}

    // Função para expandir/colapsar submenu
    window.toggleSubmenu = function(event, id) {
        event.preventDefault();
        event.stopPropagation();
        const submenu = document.getElementById(id);
        const menuItem = event.target;
        
        if (submenu && submenu.classList.contains('show')) {
            submenu.classList.remove('show');
            menuItem.classList.remove('expanded');
        } else if (submenu) {
            submenu.classList.add('show');
            menuItem.classList.add('expanded');
        }
    };

    // Language switcher functionality
    const langOptions = document.querySelectorAll('.lang-option');
    
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = e.currentTarget.getAttribute('data-lang');
            const currentPath = window.location.pathname;
            const currentFile = currentPath.split('/').pop();
            
            const langMap = {
                'pt': '-pt.html',
                'en': '-en.html',
                'es': '-es.html',
                'de': '-de.html',
                'fr': '-fr.html',
                'ja': '-ja.html'
            };
            
            let baseName = currentFile
                .replace(/-pt\.html$/, '')
                .replace(/-en\.html$/, '')
                .replace(/-es\.html$/, '')
                .replace(/-de\.html$/, '')
                .replace(/-fr\.html$/, '')
                .replace(/-ja\.html$/, '')
                .replace(/\.html$/, '');
            
            const newFile = baseName + langMap[selectedLang];
            const newPath = currentPath.replace(currentFile, newFile);
            
            window.location.href = newPath;
        });
    });

    const menu = document.querySelector('nav ul');
    const menuBar = document.querySelector('nav .menu-icon');
    const iconMenu = document.querySelector('nav .menu-icon img');

    if (menuBar && iconMenu && menu) {
        menuBar.addEventListener('click', function() {
            if (iconMenu.getAttribute("src") === 'https://alexandregames.com/imagens/close.webp') {
                iconMenu.setAttribute("src", "https://alexandregames.com/imagens/menu.png");
            } else {
                iconMenu.setAttribute("src", "https://alexandregames.com/imagens/close.webp");
            }
            menu.classList.toggle('active');
        });
    }
});

// Función para mostrar fecha de modificación (ES)
function displayModificationDate() {
    var metaTags = document.getElementsByTagName('meta');
    var modificationDate;
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (var i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute('property') === 'article:modified_time') {
            modificationDate = metaTags[i].getAttribute('content');
            break;
        }
    }

    if (modificationDate) {
        var formattedDate = new Date(modificationDate);
        var day = formattedDate.getDate();
        var month = months[formattedDate.getMonth()];
        var year = formattedDate.getFullYear();
        var dateElement = document.getElementById('data-modificacao');
        if (dateElement) {
            dateElement.textContent = 'Última actualización: ' + day + ' de ' + month + ' de ' + year;
        }
    }
}

window.onload = displayModificationDate;
