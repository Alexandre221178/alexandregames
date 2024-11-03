// Define o conteúdo HTML do menu
const menuContent = `
    <h6>Alexandre Games</h6>
    <a href="https://alexandregames.com/herowars-alliance-en.html">Hero Wars Alliance</a>
    <a href="https://alexandregames.com/MobileLegends-English.html">Mobile Legends</a>
    <a href="https://alexandregames.com/ragnarok-origin/codes-ragnarok-us.html">Ragnarok ROO</a>
    <a href="https://alexandregames.com/roblox-us.html">Roblox</a>
    <a href="https://alexandregames.com/top-troops/top-troops-en-home.html">Top Troops</a>
`;

// Seleciona a div existente com a classe "menu-fixo"
const menuFixo = document.querySelector('.menu-fixo');

// Insere o conteúdo HTML na div "menu-fixo"
if (menuFixo) {
    menuFixo.innerHTML = menuContent;
}

