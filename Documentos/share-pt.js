document.addEventListener('DOMContentLoaded', (event) => {
  const currentUrl = encodeURIComponent(window.location.href);

  document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=Confira%20este%20conteúdo:%20${currentUrl}`;
  document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;

  document.getElementById('link-share').addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
          alert('Link copiado para a área de transferência!');
      }).catch(err => {
          console.error('Erro ao copiar o link: ', err);
      });
  });
});