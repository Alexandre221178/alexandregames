// Define o conteúdo HTML do menu
const menuContent = `
    <h6><a href="https://alexandregames.com/roblox-us.html">Roblox: Most Visited</a></h6>
   
    <a href="https://alexandregames.com/roblox/roblox-us/brookhaven-guide-roblox.html">Exploring Brookhaven</a>
    <a href="https://alexandregames.com/roblox/roblox-us/secret-tricks-to-win-at-roblox.html">13 Secret Tricks to Win at Roblox</a>
    <a href="https://alexandregames.com/roblox/roblox-us/how-to-get-voice-chat-en-roblox.html">How to Get Voice Chat on Roblox</a>
     <a href="https://alexandregames.com/roblox/what-abc-means-roblox-en.html">What Does "ABC" Mean in Roblox</a>
    <a href="https://alexandregames.com/roblox/redeem-code-en-roblox.html">Roblox Codes</a>
    <a href="https://alexandregames.com/roblox/roblox-us/flee-the-facility-tips.html">Flee the Facility</a>
    <a href="https://alexandregames.com/roblox/roblox-us/roblox-man-face-en.html">Roblox Man Face</a>
    

    <h6><a href="https://alexandregames.com/roblox-us.html">Roblox: Newest</a></h6>
    <a href="https://alexandregames.com/roblox/best-roblox-horror-games-en.html">Best Roblox Horror Games</a>
    
`;

// Seleciona a div existente com a classe "menu-fixo"
const menuFixo = document.querySelector('.menu-fixo');

// Insere o conteúdo HTML na div "menu-fixo"
if (menuFixo) {
    menuFixo.innerHTML = menuContent;
}

