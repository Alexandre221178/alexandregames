// Define o conteúdo HTML do menu
const menuContent = `
  
    <h6><a href="https://alexandregames.com/roblox-br.html">Roblox: Mais Visitados</a></h6>

<a href="https://alexandregames.com/roblox/roblox-br/brookhaven-tutorial-roblox.html">Explorando Brookhaven</a>
<a href="https://alexandregames.com/roblox/roblox-br/truques-secretos-para-vencer-no-roblox.html">13 Truques Secretos para Roblox</a>
<a href="https://alexandregames.com/roblox/roblox-br/how-to-get-voice-chat-pt-roblox.html">Como Ativar o Chat de Voz</a>
<a href="https://alexandregames.com/roblox/what-abc-means-roblox-pt.html">O Que Significa "ABC" no Roblox</a>
<a href="https://alexandregames.com/roblox/redeem-code-pt-roblox.html">Códigos do Roblox</a>
<a href="https://alexandregames.com/roblox/roblox-br/fujadainstalacao-dicas-marretao.html">Marretão: Fuja da Instalação</a>
<a href="https://alexandregames.com/roblox/roblox-br/roblox-man-face-pt.html">Rosto Masculino do Roblox</a>


<h6><a href="https://alexandregames.com/roblox-br.html">Roblox: Mais Recentes</a></h6>
<a href="https://alexandregames.com/roblox/best-roblox-horror-games-pt.html">Melhores Jogos de Terror - Roblox</a>
    
`;

// Seleciona a div existente com a classe "menu-fixo"
const menuFixo = document.querySelector('.menu-fixo');

// Insere o conteúdo HTML na div "menu-fixo"
if (menuFixo) {
    menuFixo.innerHTML = menuContent;
}

