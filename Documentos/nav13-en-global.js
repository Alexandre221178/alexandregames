 // atualizar somente os nav13-en-v2.js e nav13-pt-v2.js esses são com a bandeira no nav
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

    /* Adiciona área invisível entre botão e dropdown para melhorar usabilidade */
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
    <a href="https://alexandregames.com"><img src="https://alexandregames.com/imagens/exandregames318x318-removebg.webp" alt="Alexandre Games Mobile Logo" title="Alexandre Games Mobile Logo" width="50" height="50"></a>
</div>

<ul> 

<div class="dropdown">
    <button class="dropbtn"><span class="notranslate">Gameplay Reviews</span></button>
    <div class="dropdown-content"><br>
    <a href="https://alexandregames.com/gaming-guide/review/appgallery-review-en.html">How to Install AppGallery to Get Discounts in Hero Wars</a>   
        <a href="https://alexandregames.com/hero-wars-alliance/guide/how-to-play-hero-wars-on-pc-and-mac-en.html">How to Play Hero Wars Alliance on PC & Mac</a> 
    
        
        <br><br><br>
            <br><br><br>
    </div>
</div>    

<div class="dropdown">
   <button class="dropbtn"><span class="notranslate">Hero Wars Alliance</span></button>
    <div class="dropdown-content"> <br>                
        <a href="https://alexandregames.com/hero-wars-alliance/home/hwa-index-en.html">🆕 HWA - Latest Updates</a>
        <a href="https://alexandregames.com/hero-wars-alliance/ag-daily-gifts-hwa/gifts-hwa-en.html">🎁 HWA Daily Gifts</a>
        <a href="https://alexandregames.com/Hero%20Wars/calendar-event-en-hwa.html">📅 HWA Calendar & Events</a>
        <a href="https://alexandregames.com/Hero%20Wars%20English/Heroes%20Guide%20Hero%20Wars.html">📖 All Characters Guide</a>
     <a href="https://alexandregames.com/hero-wars-alliance/menu-tactics-secrets-hwa-en.html">📚 Best Guides & Secrets</a>
        <a href="hero-wars-alliance/tier-list-hwa/hero-wars-alliance-tier-list-en.html">🏆 Best Tier List</a>
        <a href="https://alexandregames.com/hero-wars-alliance/menu-best-teams-en-hwa.html">👥 Best Teams Guide</a>
        <a href="https://alexandregames.com/hero-wars-alliance/guide/counter-en-herowarsalliance.html">🎯 Counters Guide</a>
        <a href="https://alexandregames.com/hero-wars-alliance/menu-review-en-hwa.html">🎨 Skins Reviews</a>

         <a href="https://alexandregames.com/hero-wars-alliance/menu-hwa/titans-guide-hwa-en.html">⚔️ Titans Guide</a>
        <a href="https://alexandregames.com/hero-wars-alliance/event-hwa/herosway-en-hwa.html">🛤️ The Hero's Way</a>  

        
        <br><br><br><br>
        
    </div>
</div>  

<div class="dropdown">

<button class="dropbtn"><span class="notranslate">Hero Wars: Dominion Era</span></button>
    <div class="dropdown-content"> <br>  
    <a href="https://alexandregames.com/hero-wars-dominion-era/home/hwde-en.html">🆕 HWDE - Latest Updates</a>
     <a href="https://alexandregames.com/hero-wars-dominion-era/ag-daily-gifts-hwde/gifts-hwde-en.html">🎁 HWDE - Daily Gifts</a>
     <a href="https://alexandregames.com/hero-wars-dominion-era/menu/calendar-hwde-en.html">📅 HWDE - Calendar & Events</a>
   
    <a href="https://alexandregames.com/hero-wars-dominion-era/guide/best-war-flag-en.html">⚔️ Best War Flags</a>
    
    
    <a href="https://alexandregames.com/hero-wars-dominion-era/menu/heroes-guide-hwde-en.html">📖 Heroes Guide</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/guide/heroes-rank-tier-list-en.html">🏆 Heroes Tier List</a>
     
    <a href="https://alexandregames.com/hero-wars-dominion-era/guide/mysterious-island-en.html">🏝️ Mysterious Island 2026</a>
   
<a class="expandable-menu" onclick="toggleSubmenu(event, 'pet-maps')">Pet Adventure Maps</a>
    <div id="pet-maps" class="submenu-items">
        <a href="https://alexandregames.com/hero-wars-dominion-era/menu/adventure-map-guide-en.html">All Maps Guide</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-02-en.html">Map 02</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-03-en.html">Map 03</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-04-en.html">Map 04</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-05-en.html">Map 05</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-06-en.html">Map 06</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-07-en.html">Map 07</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-08-en.html">Map 08</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/siege-of-strongford-en.html">Map 09</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-10-en.html">Map 10</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-11-en.html">Map 11</a>
        <a href="https://alexandregames.com/hero-wars-dominion-era/adventure-maps/map-12-en.html">Map 12</a>
    </div>

    <a href="https://alexandregames.com/hero-wars-dominion-era/menu/pet-guide-menu-en.html">🐾 Pet Guide</a>   
    <a href="https://alexandregames.com/hero-wars-dominion-era/guide/pets-tier-list-en.html">🏆 Pet Tier List</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/guide/promo-code-hwde-en.html">🎟️ Promo Codes</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/menu/titans-menu-hwde-en.html">⚔️ Titans Guide</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/guide/totem-fusion-skills-en.html">⚡ Totem Fusion Skills Ranked</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/guide/totems-guide-en.html">🗿 Totems Guide</a>
    
    
        
        <br><br><br><br>
        
    </div>
</div>  

<div class="dropdown">
    <button class="dropbtn"><span class="notranslate">Mobile Legends</span></button>
    <div class="dropdown-content"><br>
        
    <a href="https://alexandregames.com/MobileLegends-English.html">Heroes Guide</a>
    <a href="https://alexandregames.com/mobile-legends/article-mlbb/tier-list-mlbb-en.html">MLBB Tier List</a>
    <a href="https://alexandregames.com/mobile-legends/article-mlbb/gold-lane-guide-en-mlbb.html">Gold Lane Guide</a>
    <a href="https://alexandregames.com/mobile-legends/article-mlbb/roam-guide-mlbb-en.html">Roam Lane Guide</a>          
                            
        
        <br><br><br>
    </div>
</div>      

<div class="dropdown">
    <button class="dropbtn"><a href="https://alexandregames.com/roblox-us.html">Roblox PC/Mobile</a></button>
</div> 

    
    
    <div class="dropdown">
        <button class="dropbtn">More Games</button>
        <div class="dropdown-content"><br>
            <a href="https://alexandregames.com/top-troops/top-troops-en-home.html"><span class="notranslate">Top Troops</a>
            <a href="https://alexandregames.com/throne-and-liberty/menu-throne-and-liberty/menu-throne-and-liberty-en.html"><span class="notranslate">Throne and Liberty</a>
            <a href="https://alexandregames.com/ragnarok-origin/codes-ragnarok-us.html"><span class="notranslate">Ragnarok ROO</a>

            <a href="https://alexandregames.com/gaming-guide/review/tales-of-wind-review-en.html"><span class="notranslate">Tales of Wind: RR</a>
            <a href="https://alexandregames.com/gaming-guide/review/the-dragon-odyssey-gameplay-en.html"><span class="notranslate">The Dragon Odyssey</a>                    
            <a href="https://alexandregames.com/gaming-guide/review/echoes-of-eternity-game-review-en.html"><span class="notranslate">Echoes of Eternity</a>
            <a href="https://alexandregames.com/gaming-guide/review/path-of-exile-2-en.html"><span class="notranslate">Path of Exile2 - Tier List</a>
            <a>_____________</a>
            <a href="https://alexandregames.com/Documentos/Contact.html">Contact</a>            
            <a href="https://alexandregames.com/Documentos/about.html">About Us</a>
            
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
    document.querySelector('#menu-container').prepend(navElement);

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

    // Language switcher functionality
    const langOptions = document.querySelectorAll('.lang-option');
    
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = e.currentTarget.getAttribute('data-lang');
            const currentPath = window.location.pathname;
            const currentFile = currentPath.split('/').pop();
            
            // Mapeamento de sufixos de idioma
            const langMap = {
                'pt': '-pt.html',
                'en': '-en.html',
                'es': '-es.html',
                'de': '-de.html',
                'fr': '-fr.html',
                'ja': '-ja.html'
            };
            
            // Remove qualquer sufixo de idioma existente
            let baseName = currentFile
                .replace(/-pt\.html$/, '')
                .replace(/-en\.html$/, '')
                .replace(/-es\.html$/, '')
                .replace(/-de\.html$/, '')
                .replace(/-fr\.html$/, '')
                .replace(/-ja\.html$/, '')
                .replace(/\.html$/, '');
            
            // Adiciona o novo sufixo de idioma
            const newFile = baseName + langMap[selectedLang];
            const newPath = currentPath.replace(currentFile, newFile);
            
            window.location.href = newPath;
        });
    });

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

    // Array with month names
    var months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Find the meta tag with property="article:modified_time"
    for (var i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute('property') === 'article:modified_time') {
            modificationDate = metaTags[i].getAttribute('content');
            break;
        }
    }

    // Display the modification date on the page
    if (modificationDate) {
        var formattedDate = new Date(modificationDate);
        var day = formattedDate.getDate();
        var month = months[formattedDate.getMonth()]; // Get the month name
        var year = formattedDate.getFullYear();
        var dateElement = document.getElementById('data-modificacao');
        dateElement.textContent = 'Last updated: ' + month + ' ' + day + ', ' + year;
    }
}

// Call the function when the page loads
window.onload = displayModificationDate;


//  cookies alexandregames colocado aqui para teste o correto esta no footer insert
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

   
  
