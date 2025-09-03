 // atualizar somente os nav13-en-v2.js e nav13-pt-v2.js esses são com a bandeira no nav
document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
<div class="logo">
    <a href="https://alexandregames.com/index-pt.html"><img src="https://alexandregames.com/imagens/exandregames318x318-removebg.webp" alt="logo Alexandre Games Mobile" title="logo Alexandre Games Mobile"></a>
</div>                     
<ul>             

<div class="dropdown">
    <button class="dropbtn">Análises de Gameplay</button>
    <div class="dropdown-content"><br>
        
    <a href="https://alexandregames.com/gaming-guide/review/appgallery-review-pt.html">Instale o AppGallery no Android para descontos em Hero Wars</a>
    <a href="https://alexandregames.com/gaming-guide/review/echoes-of-eternity-game-review-pt.html">Echoes of Eternity</a>
    <a href="https://alexandregames.com/hero-wars-alliance/guide/how-to-play-hero-wars-on-pc-and-mac-pt.html">Jogue Hero Wars Alliance no PC e Mac</a>
        <a href="https://alexandregames.com/gaming-guide/review/tales-of-wind-review-pt.html">Tales of Wind: RR</a>
    <a href="https://alexandregames.com/gaming-guide/review/the-dragon-odyssey-gameplay-pt.html">The Dragon Odyssey</a>
                            
        
        <br><br><br>
            <br><br><br>
            
    </div>
</div>    


<div class="dropdown">
    <button class="dropbtn">Hero Wars Alliance</button>
    <div class="dropdown-content"><br>
        
    <a href="https://alexandregames.com/HeroWars.html">HWA - Início</a>  
    <a href="https://alexandregames.com/hero-wars-alliance/menu-review-pt-hwa.html">Análises de Skins</a>  
    <a href="https://alexandregames.com/Hero%20Wars/calendar-event-pt-hwa.html">Calendário & Eventos</a>
    <a href="https://alexandregames.com/hero-wars-alliance/event-hwa/herosway-pt-hwa.html">Caminho do Herói</a> 
    <a href="https://alexandregames.com/gaming-guide/review/appgallery-review-pt.html">💰 Ganhe Descontos</a>
    <a href="https://alexandregames.com/Hero%20Wars/Guiadeherois.html">Guia de Heróis</a>   
    <a href="https://alexandregames.com/hero-wars-alliance/menu-best-teams-pt-hwa.html">Guia de Melhores Times</a> 
    <a href="https://alexandregames.com/Hero%20Wars/Guia%20de%20Titans.html">Guia de Titãs</a>                                 
    <a href="https://alexandregames.com/hero-wars-alliance/menu-tactics-secrets-hwa-en.html">Guias & Segredos</a> 
     <a href="https://alexandregames.com/y-m-gifts-hwa-en.html">Presentes Diários</a>
    <a href="https://alexandregames.com/Hero%20Wars/articles-herowars/tierlist-pt-pvp-herowars.html">Tier List</a> 
    
    
        
        <br><br><br><br>
        
    </div>  
</div>   

    <div class="dropdown">

<button class="dropbtn">Hero Wars: Dominion Era</button>
<div class="dropdown-content"> <br>  
<a href="https://alexandregames.com/hero-wars-dominion-era/menu-hero-wars-dominion-era-pt.html">HWDE - Home</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/menu/calendar-hwde-pt.html">Calendário & Eventos</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/promo-code-hwde-pt.html">Códigos Promocionais</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/menu/heroes-guide-hwde-pt.html">Guia de Heróis</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/menu/pet-guide-menu-pt.html">Guia de Mascotes</a> 
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/totems-guide-pt.html">Guia de Totens</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/totem-fusion-skills-pt.html">Fusão de Totens – Ranking</a>

<a href="https://alexandregames.com/hero-wars-dominion-era/guide/mysterious-island-pt.html">Ilha Misteriosa Setembro 2025</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/menu/adventure-map-guide-pt.html">Mapas de Aventura de Pet</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/best-war-flag-pt.html">Melhores Bandeira de Guerra</a>
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/heroes-rank-tier-list-pt.html">Tier List de Heróis</a>          
<a href="https://alexandregames.com/hero-wars-dominion-era/guide/pets-tier-list-pt.html">Tier List de Mascotes</a>




<br><br><br><br>

</div>
</div>  
    
    <div class="dropdown">
        <button class="dropbtn">Mobile Legends</button>
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
    <button class="dropbtn">Top Troops</button>
    <div class="dropdown-content"><br>
        
    <a href="https://alexandregames.com/top-troops/top-troops-pt-home.html">Guia de Top Troops</a>
    <a href="https://alexandregames.com/top-troops/top-troops-heroes-guide-pt.html">Guia de Heróis</a>
    <a href="https://alexandregames.com/top-troops/top-troops-pt-tier-list.html">Tier List de Classe</a>
                            
        
        <br><br><br>
    </div>
</div>      

<div class="dropdown">
<button class="dropbtn">Mais Jogos</button>
<div class="dropdown-content"><br>
    <a href="https://alexandregames.com/throne-and-liberty/menu-throne-and-liberty/menu-throne-and-liberty-pt.html">Throne and Liberty</a>
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
