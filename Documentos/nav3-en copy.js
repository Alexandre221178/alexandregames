document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <div class="logo">
            <a href="https://alexandregames.com"><img src="../../imagens/exandregames318x318-removebg.webp" alt="Alexandre Games Logo" title="Alexandre Games - Home"></a>
        </div>                    
        <ul>                     
            <div class="dropdown">
                <button><a href="../../herowars-alliance-en.html">Hero Wars Alliance</a></button>
            </div>
            <div class="dropdown">
                <button><a href="../../MobileLegends-English.html">Mobile Legends</a></button>
            </div>
            <div class="dropdown">
                <button><a href="../../roblox-us.html">Roblox</a></button>
            </div>

<div class="dropdown">
                <button class="dropbtn">Top Troops</button>
                <div class="dropdown-content">
                
                    <a href="../../top-troops/tips-and-tricks-en-top-troops.html">Tips and Tricks</a>
                    <a href="../../top-troops/top-troops-us-tier-list.html">Tier List</a>
                    
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">More</button>
                <div class="dropdown-content">
                <a href="../../ragnarok-origin/codes-ragnarok-us.html">Ragnarok ROO</a>
                    <a>_____________</a>
                    <a href="../../Documentos/about.html">About Us</a>
                    <a href="../../Documentos/Contact.html">Contact</a>
                    <a href="../../Documentos/disclaimer.html">Disclaimer</a>
                    <a href="../../Documentos/PrivacyPolicy.html">Privacy Policy</a>
                    <a href="../../Documentos/TermsofUse.html">Terms of Use</a>
                </div>
            </div>
        </ul>
        <div class="menu-icon">
            <img src="../../imagens/menu.png" alt="Menu" style="width:48px;height:48px;">
        </div>
    `;

    const navElement = document.createElement('nav');
    navElement.innerHTML = navHTML;
    document.querySelector('.container').prepend(navElement);

    // Move the language switch button inside the nav
    const langButton = document.querySelector('.language-switch');
    navElement.querySelector('ul').appendChild(langButton);

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

// last modified inicio

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
    
// last modified fim






  


