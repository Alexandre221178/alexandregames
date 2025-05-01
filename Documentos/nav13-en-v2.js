 // atualizar somente os nav13-en-v2.js e nav13-pt-v2.js esses são com a bandeira no nav
document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
<div class="logo">
    <a href="https://alexandregames.com"><img src="https://alexandregames.com/imagens/exandregames318x318-removebg.webp" alt="Alexandre Games Mobile Logo" title="Alexandre Games Mobile Logo" width="50" height="50"></a>
</div>

<ul> 

<div class="dropdown">
    <button class="dropbtn">Gameplay Reviews</button>
    <div class="dropdown-content"><br>
    <a href="https://alexandregames.com/gaming-guide/review/appgallery-review-en.html">Install AppGallery on Android for Hero Wars Discounts</a>   
    <a href="https://alexandregames.com/gaming-guide/review/echoes-of-eternity-game-review-en.html">Echoes of Eternity</a>
    <a href="https://alexandregames.com/hero-wars-alliance/guide/how-to-play-hero-wars-on-pc-and-mac-en.html">Play Hero Wars Alliance on PC & Mac</a> 
    <a href="https://alexandregames.com/gaming-guide/review/tales-of-wind-review-en.html">Tales of Wind: RR</a>
    <a href="https://alexandregames.com/gaming-guide/review/the-dragon-odyssey-gameplay-en.html">The Dragon Odyssey</a>                    
        
        <br><br><br>
            <br><br><br>
    </div>
</div>    



    <div class="dropdown">

    <button class="dropbtn">Hero Wars Alliance</button>
    <div class="dropdown-content"> <br>                
        <a href="https://alexandregames.com/herowars-alliance-en.html">HWA - Home</a>
        <a href="https://alexandregames.com/hero-wars-alliance/menu-best-teams-en-hwa.html">Best Teams Guide</a>
        <a href="https://alexandregames.com/Hero%20Wars/calendar-event-en-hwa.html">Calendar & Events</a>
        <a href="https://alexandregames.com/Hero%20Wars%20English/Heroes%20Guide%20Hero%20Wars.html">Heroes Guide</a>
        <a href="https://alexandregames.com/hero-wars-alliance/event-hwa/herosway-en-hwa.html">Hero's Way</a>  
        <a href="https://alexandregames.com/hero-wars-alliance/menu-review-en-hwa.html">Skins Reviews</a>
        <a href="https://alexandregames.com/hero-wars-alliance/menu-tactics-secrets-hwa-en.html">Tactics & Secrets</a>
        <a href="https://alexandregames.com/Hero%20Wars/articles-herowars/tierlist-en-pvp-herowars.html">Tier List</a>
        <a href="https://alexandregames.com/Hero%20Wars%20English/Titans%20Guide%20Hero%20Wars.html">Titans Guide</a>
        
        
        <br><br><br><br>
        
    </div>
</div>  

<div class="dropdown">

<button class="dropbtn">Hero Wars: Dominion Era</button>
    <div class="dropdown-content"> <br>  
    <a href="https://alexandregames.com/hero-wars-dominion-era/menu-hero-wars-dominion-era-en.html">HWDE - Home</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/guide/heroes-rank-tier-list-en.html">Heroes Tier List</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/guide/totems-guide-en.html">Best Totems Guide</a>
    <a href="https://alexandregames.com/hero-wars-dominion-era/guide/pets-tier-list-en.html">PET Tier List</a>
    
        
        
        
        <br><br><br><br>
        
    </div>
</div>  

<div class="dropdown">
    <button class="dropbtn">Mobile Legends</button>
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
        <button class="dropbtn">Top Troops</button>
        <div class="dropdown-content"><br>
            
        <a href="https://alexandregames.com/top-troops/top-troops-en-home.html">Top Troops Guide</a>
        <a href="https://alexandregames.com/top-troops/top-troops-heroes-guide-en.html">Heroes Guide</a>
        <a href="https://alexandregames.com/top-troops/top-troops-us-tier-list.html">Class Tier List</a>
                                
            
            <br><br><br>
        </div>
    </div>      

    
    <div class="dropdown">
        <button></button>
    </div>

    <div class="dropdown">
        <button class="dropbtn">More Games</button>
        <div class="dropdown-content"><br>
        <a href="https://alexandregames.com/throne-and-liberty/menu-throne-and-liberty/menu-throne-and-liberty-en.html">Throne and Liberty</a>
            <a href="https://alexandregames.com/ragnarok-origin/codes-ragnarok-us.html">Ragnarok ROO</a>
            <a>_____________</a>
            <a href="https://alexandregames.com/Documentos/Contact.html">Contact</a>
            <a href="https://alexandregames.com/Documentos/disclaimer.html">Disclaimer</a>
            <a href="https://alexandregames.com/Documentos/PrivacyPolicy.html">Privacy Policy</a>
            <a href="https://alexandregames.com/Documentos/about.html">About Us</a>
            <a href="https://alexandregames.com/Documentos/TermsofUse.html">Terms of Use</a>
            <br><br><br>
        </div>
    </div>
    <div class="dropdown">
<button class="language-switch">
    <img src="https://alexandregames.com/imagens/flag-brazil-32x32.png" alt="Brazil flag" title="Brazil flag" style="width:24px;height:16px">
    <strong>PT</strong>
</button>
</div>
    </ul>
    <div class="menu-icon">
        <img src="https://alexandregames.com/imagens/menu.png" alt="Menu" style="width:48px;height:48px;">
    </div>
    `;

    const navElement = document.createElement('nav');
    navElement.innerHTML = navHTML;
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

   
  