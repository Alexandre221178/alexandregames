document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <div class="logo">
            <a href="https://alexandregames.com"><img src="../../imagens/exandregames318x318-removebg.webp" alt="Alexandre Games Logo" title="Alexandre Games - Home"></a>
        </div>                    
        <ul>
            <li><a href="../../herowars-alliance-en.html">Hero Wars Alliance</a></li>
            <li><a href="../../MobileLegends-English.html">Mobile Legends</a></li>
            <li><a href="../../roblox-us.html">Roblox</a></li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Top Troops</a>
                <div class="dropdown-content">
                    <a href="../../top-troops/tips-and-tricks-en-top-troops.html">Tips and Tricks</a>
                    <a href="../../top-troops/top-troops-us-tier-list.html">Tier List</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">More</a>
                <div class="dropdown-content">
                    <a href="../../ragnarok-origin/codes-ragnarok-us.html">Ragnarok ROO</a>
                    <a>_____________</a>
                    <a href="../../Documentos/about.html">About Us</a>
                    <a href="../../Documentos/Contact.html">Contact</a>
                    <a href="../../Documentos/disclaimer.html">Disclaimer</a>
                    <a href="../../Documentos/PrivacyPolicy.html">Privacy Policy</a>
                    <a href="../../Documentos/TermsofUse.html">Terms of Use</a>
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

    const menu = document.querySelector('nav ul');
    const menuBar = document.querySelector('nav .menu-icon');
    const iconMenu = document.querySelector('nav .menu-icon img');

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

        // Array com os nomes dos meses
        var months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
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
            dateElement.textContent = 'Last updated: ' + month + ' ' + day + ', ' + year;
        }
    }

    // Chama a função quando a página carregar
    displayModificationDate();
});


