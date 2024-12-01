// Define o conteúdo HTML do menu
const menuContent = `
  
    <h6><a href="https://alexandregames.com/roblox-us.html">Roblox: Mais Visitados</a></h6>

<a href="https://alexandregames.com/roblox/roblox-us/brookhaven-guide-roblox.html">Explorando Brookhaven</a>
<a href="https://alexandregames.com/roblox/roblox-us/secret-tricks-to-win-at-roblox.html">13 Truques Secretos para Roblox</a>
<a href="https://alexandregames.com/roblox/roblox-us/how-to-get-voice-chat-en-roblox.html">Como Ativar o Chat de Voz</a>
<a href="https://alexandregames.com/roblox/what-abc-means-roblox-en.html">O Que Significa "ABC" no Roblox</a>
<a href="https://alexandregames.com/roblox/redeem-code-en-roblox.html">Códigos do Roblox</a>
<a href="https://alexandregames.com/roblox/roblox-us/flee-the-facility-tips.html">Marretão: Fuja da Instalação</a>
<a href="https://alexandregames.com/roblox/roblox-us/roblox-man-face-en.html">Rosto Masculino do Roblox</a>
<a href="https://alexandregames.com/roblox/roblox-us/murder-guide-roblox.html">Murder Mystery</a>

<br>
<h6><a href="https://alexandregames.com/roblox-us.html">Roblox: Mais Recentes</a></h6>
<a href="https://alexandregames.com/roblox/best-roblox-horror-games-en.html">Melhores Jogos de Terror - Roblox</a>
    
`;

// Seleciona a div existente com a classe "menu-fixo"
const menuFixo = document.querySelector('.menu-fixo');

// Insere o conteúdo HTML na div "menu-fixo"
if (menuFixo) {
    menuFixo.innerHTML = menuContent;
}

