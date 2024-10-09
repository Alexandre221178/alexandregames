// Função para pegar a URL de compartilhamento
function getShareableUrl() {
    const ogUrl = document.querySelector('meta[property="og:url"]')?.content;
    const currentUrl = window.location.href;

    // Retorna a `og:url` se estiver presente, senão a URL atual.
    return ogUrl || currentUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    const shareableUrl = getShareableUrl();

    // Atualizar os links de compartilhamento com a URL correta
    document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=Confira%20este%20conteúdo:%20${encodeURIComponent(shareableUrl)}`;
    document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableUrl)}`;
    document.getElementById('reddit-share').href = `https://www.reddit.com/submit?url=${encodeURIComponent(shareableUrl)}&title=Confira%20este%20conteúdo`;

    // Função para copiar o link
    document.getElementById('link-share').addEventListener('click', () => {
        navigator.clipboard.writeText(shareableUrl).then(() => {
            alert('Link copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar o link: ', err);
        });
    });
});
