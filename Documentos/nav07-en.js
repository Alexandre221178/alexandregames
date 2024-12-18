document.addEventListener('DOMContentLoaded', () => {
    // Define the navigation HTML
    const navHTML = `
        <div class="logo">
            <a href="https://alexandregames.com">
                <img src="https://alexandregames.com/imagens/exandregames318x318-removebg.webp" 
                     alt="Alexandre Games Mobile Logo" 
                     title="Alexandre Games Mobile Logo">
            </a>
        </div>
        <ul> 
            <div class="dropdown">
                <button class="dropbtn">Hero Wars Alliance</button>
                <div class="dropdown-content">
                    <a href="https://alexandregames.com/herowars-alliance-en.html">HWA - Home</a>
                    <a href="https://alexandregames.com/hero-wars-alliance/menu-best-teams-en-hwa.html">Best Teams Guide</a>
                    <a href="https://alexandregames.com/Hero%20Wars/calendar-event-en-hwa.html">Calendar & Events</a>
                    <a href="https://alexandregames.com/Hero%20Wars%20English/Heroes%20Guide%20Hero%20Wars.html">Heroes Guide</a>
                    <a href="https://alexandregames.com/hero-wars-alliance/event-hwa/herosway-en-hwa.html">Hero's Way <br>Nov. 25 - Dec. 22</a>
                    <a href="https://alexandregames.com/hero-wars-alliance/menu-review-en-hwa.html">Skins Reviews</a>
                    <a href="https://alexandregames.com/hero-wars-alliance/menu-tactics-secrets-hwa-en.html">Tactics & Secrets</a>
                    <a href="https://alexandregames.com/Hero%20Wars%20English/Titans%20Guide%20Hero%20Wars.html">Titans Guide</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn"><a href="https://alexandregames.com/MobileLegends-English.html">Mobile Legends</a></button> 
            </div> 
            <div class="dropdown">
                <button class="dropbtn"><a href="https://alexandregames.com/roblox-us.html">Roblox PC/Mobile</a></button>
            </div>
            <div class="dropdown">
                <button><a href="https://alexandregames.com/top-troops/top-troops-en-home.html">Top Troops</a></button>
            </div>
            <div class="dropdown">
                <button><a href="https://alexandregames.com/throne-and-liberty/menu-throne-and-liberty/menu-throne-and-liberty-en.html">Throne and Liberty</a></button>
            </div>
            <div class="dropdown">
                <button class="dropbtn">More Games</button>
                <div class="dropdown-content">
                    <a href="https://alexandregames.com/ragnarok-origin/codes-ragnarok-us.html">Ragnarok ROO</a>
                    <a>_____________</a>
                    <a href="https://alexandregames.com/Documentos/Contact.html">Contact</a>
                    <a href="https://alexandregames.com/Documentos/disclaimer.html">Disclaimer</a>
                    <a href="https://alexandregames.com/Documentos/PrivacyPolicy.html">Privacy Policy</a>
                    <a href="https://alexandregames.com/Documentos/about.html">About Us</a>
                    <a href="https://alexandregames.com/Documentos/TermsofUse.html">Terms of Use</a>
                </div>
            </div>
            <button class="dropbtn language-switch">
                <img src="../../imagens/flag-brazil-32x32.png" 
                     alt="Bandeira do Brasil" 
                     title="Bandeira do Brasil" 
                     style="width:24px;height:16px">
                <strong> PT</strong>
            </button>
        </ul>
        <div class="menu-icon">
            <img src="https://alexandregames.com/imagens/menu.png" 
                 alt="Menu" 
                 style="width:48px;height:48px;">
        </div>
    `;
    document.addEventListener('DOMContentLoaded', () => {
        const languageContainer = document.getElementById('language-container');
    
        const languageLink = document.createElement('a');
        languageLink.href = "../../hero-wars-alliance/event-hwa/herosway-pt-hwa.html";
        languageLink.classList.add('language-switch');
    
        // Criar a imagem da bandeira
        const flagImage = document.createElement('img');
        flagImage.src = "../../imagens/flag-brazil-32x32.png";
        flagImage.alt = "Bandeira do Brasil";
        flagImage.title = "Bandeira do Brasil";
        flagImage.style.width = "24px";
        flagImage.style.height = "16px";
    
        // Criar o texto "PT"
        const ptText = document.createElement('strong');
        ptText.textContent = "PT";
    
        // Adicionar a imagem e o texto dentro do link
        languageLink.appendChild(flagImage);
        languageLink.appendChild(ptText);
    
        // Adicionar o link ao contêiner
        languageContainer.appendChild(languageLink);
    });
    
    // Create and append the navigation
    const navElement = document.createElement('nav');
    navElement.innerHTML = navHTML;
    document.querySelector('#menu-container').prepend(navElement);

    // Add functionality to the language switch button
    document.querySelector('.language-switch').addEventListener('click', () => {
        // Replace '/English/' with '/Portuguese/' in the current URL
        const currentUrl = window.location.href;
        const newUrl = currentUrl.replace('/English/', '/Portuguese/');
        window.location.href = newUrl;
    });

    // Toggle the menu icon and visibility
    const menu = document.querySelector('nav ul');
    const menuBar = document.querySelector('nav .menu-icon');
    const iconMenu = document.querySelector('nav .menu-icon img');

    menuBar.addEventListener('click', () => {
        const isMenuOpen = iconMenu.getAttribute("src").includes('close.webp');
        iconMenu.setAttribute("src", isMenuOpen ? "https://alexandregames.com/imagens/menu.png" : "https://alexandregames.com/imagens/close.webp");
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