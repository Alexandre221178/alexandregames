// Define o conteúdo HTML do menu
const menuContent = `
    <h6>Alexandre Games</h6>
    <a href="./herowars-alliance-en.html">Hero Wars Alliance</a>
    <a href="./MobileLegends-English.html">Mobile Legends</a>
    <a href="./roblox-us.html">Roblox</a>
    <a href="./top-troops/top-troops-en-home.html">Top Troops</a>
`;

// Seleciona a div existente com a classe "menu-fixo"
const menuFixo = document.querySelector('.menu-fixo');

// Insere o conteúdo HTML na div "menu-fixo"
if (menuFixo) {
    menuFixo.innerHTML = menuContent;
}

