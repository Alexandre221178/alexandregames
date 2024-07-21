 //  cookies alexandregames
document.addEventListener("DOMContentLoaded", function() {
  const acceptCookiesBtn = document.getElementById('accept-cookies');
  const rejectCookiesBtn = document.getElementById('reject-cookies');
  const cookieBanner = document.getElementById('cookie-banner');

  acceptCookiesBtn.addEventListener('click', function() {
      setCookie('cookie_consent', 'accepted', 365);
      cookieBanner.style.display = 'none';
  });

  rejectCookiesBtn.addEventListener('click', function() {
      setCookie('cookie_consent', 'rejected', 365);
      cookieBanner.style.display = 'none';
  });

  function setCookie(name, value, days) {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
  }

  function getCookie(name) {
      const cookieArray = document.cookie.split(';');
      for (let i = 0; i < cookieArray.length; i++) {
          const cookiePair = cookieArray[i].split('=');
          if (name === cookiePair[0].trim()) {
              return decodeURIComponent(cookiePair[1]);
          }
      }
      return null;
  }

  const consent = getCookie('cookie_consent');
  if (consent === 'accepted' || consent === 'rejected') {
      cookieBanner.style.display = 'none';
  }
});
//  fim do cookies alexandregames
 
 



 
 // Função para carregar a segunda metade do conteúdo após um atraso
 function loadSecondHalf() {
  document.getElementById('second-half').classList.remove('hidden');
}

// Simula um atraso antes de carregar a segunda metade do conteúdo
setTimeout(loadSecondHalf, 500); // 2000 = Atraso de 2 segundos 

