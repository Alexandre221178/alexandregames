// Aumentar o tamanho do botão
document.getElementById('loadScript').style.padding = '10px 20px';
document.getElementById('loadScript').style.fontSize = '16px';



// Código original graphcomments
function loadComments() {
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
  graphcommentId: "Alexandre-Games-Blog", // make sure the id is yours
  behaviour: {
    // HIGHLY RECOMMENDED
    //  uid: "...", // uniq identifer for the comments thread on your page (ex: your page id)
  },
  // configure your variables here
}

function __semio__onload() {
  __semio__gc_graphlogin(__semio__params);
}




