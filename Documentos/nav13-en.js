document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <div class="logo">
            <a href="https://alexandregames.com"><img src="https://alexandregames.com/imagens/exandregames318x318-removebg.webp" alt="Alexandre Games Mobile Logo" title="Alexandre Games Mobile Logo"></a>
        </div>
        
        <ul>                     
            <div class="dropdown">
                <button class="dropbtn"><a href="https://alexandregames.com/herowars-alliance-en.html">Hero Wars Alliance</a></button>
                
            </div>              
            <div class="dropdown">
                <button class="dropbtn"><a href="https://alexandregames.com/MobileLegends-English.html">Mobile Legends</a></button>
                
            </div> 
            <div class="dropdown">
                <button class="dropbtn"><a href="https://alexandregames.com/roblox-us.html">Roblox</a></button>
                
            </div> 
            <div class="dropdown">
                <button class="dropbtn">Top Troops</button>
                <div class="dropdown-content">
                    <a href="https://alexandregames.com/top-troops/tips-and-tricks-en-top-troops.html">Tips and Tricks</a>
                    <a href="https://alexandregames.com/top-troops/top-troops-us-tier-list.html">Tier List</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">More</button>
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