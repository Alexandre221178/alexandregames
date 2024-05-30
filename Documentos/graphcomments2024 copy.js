document.addEventListener('DOMContentLoaded', function() {
  // Verifica se a largura da tela é menor ou igual a 768px (típico para dispositivos móveis)
  var isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
      // Mostra o botão para carregar comentários em dispositivos móveis
      document.getElementById('loadScript').style.display = 'block';
      // Mostra a frase "Clique no botão abaixo para começar:"
      document.querySelector('.mobile-only').style.display = 'block';
      
      document.getElementById('loadScript').addEventListener('click', function() {
          loadComments();
      });
  } else {
      // Carrega os comentários automaticamente em dispositivos não-móveis após a página estar completamente carregada
      window.addEventListener('load', function() {
          loadComments();
      });
  }
});

function loadComments() {
  document.getElementById('loadScript').style.display = 'none';
  document.getElementById('loadingMessage').style.display = 'block';
  // Oculta a frase "Clique no botão abaixo para começar:" após carregar os comentários
  document.querySelector('.mobile-only').style.display = 'none';

  // Código original GraphComment
  var gc = document.createElement('script'); 
  gc.type = 'text/javascript'; 
  gc.async = true;
  gc.onload = function() {
      // Esconder a mensagem de carregamento quando o script for carregado
      document.getElementById('loadingMessage').style.display = 'none';
      __semio__onload();
  }; 
  gc.defer = true; 
  gc.src = 'https://integration.graphcomment.com/gc_graphlogin.js?' + Date.now();
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
}

var __semio__params = {
graphcommentId: "Alexandre-Games-Blog", // certifique-se de que o id é seu
behaviour: {
  // ALTAMENTE RECOMENDADO
  //  uid: "...", // identificador único para o thread de comentários na sua página (ex: seu id de página)
},
// configure suas variáveis aqui
};

function __semio__onload() {
__semio__gc_graphlogin(__semio__params);
}