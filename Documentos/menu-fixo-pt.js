// Define o conteúdo HTML do menu
const menuContent = `
    <h6>Alexandre Games</h6>
    <a href="https://alexandregames.com/HeroWars.html">Hero Wars Alliance</a>
    <a href="https://alexandregames.com/MobileLegends.html">Mobile Legends</a>
    <a href="https://alexandregames.com/ragnarok-origin/codigos-ragnarok-br.html">Ragnarok ROO</a>
    <a href="https://alexandregames.com/roblox-br.html">Roblox</a>
    <a href="https://alexandregames.com/top-troops/top-troops-pt-home.html">Top Troops</a>
    <a href="https://alexandregames.com/throne-and-liberty/menu-throne-and-liberty/menu-throne-and-liberty-pt.html">Throne and Liberty</a>
    
`;

// Seleciona a div existente com a classe "menu-fixo"
const menuFixo = document.querySelector('.menu-fixo');

// Insere o conteúdo HTML na div "menu-fixo"
if (menuFixo) {
    menuFixo.innerHTML = menuContent;
}

