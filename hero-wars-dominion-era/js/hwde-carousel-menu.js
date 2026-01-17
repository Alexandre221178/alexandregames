(function(){
  // Lightweight loader to preserve existing HTML references.
  var s = document.createElement('script');
  s.src = '../hwde-java/hwde-carousel-menu.js';
  s.defer = true;
  s.onload = function(){ /* loaded */ };
  s.onerror = function(){ console.error('hwde-carousel-menu loader: failed to load ../hwde-java/hwde-carousel-menu.js'); };
  document.head.appendChild(s);
})();
