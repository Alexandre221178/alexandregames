// Función para obtener la URL compartible
function getShareableUrl() {
    const ogUrl = document.querySelector('meta[property="og:url"]')?.content;
    const currentUrl = window.location.href;

    // Devuelve la `og:url` si está presente, de lo contrario la URL actual.
    return ogUrl || currentUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    const shareableUrl = getShareableUrl();

    // Actualizar los enlaces de compartir con la URL correcta
    document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=Revisa%20este%20contenido:%20${encodeURIComponent(shareableUrl)}`;
    document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableUrl)}`;
    document.getElementById('reddit-share').href = `https://www.reddit.com/submit?url=${encodeURIComponent(shareableUrl)}&title=Revisa%20este%20contenido`;

    // Función para copiar el enlace
    document.getElementById('link-share').addEventListener('click', () => {
        navigator.clipboard.writeText(shareableUrl).then(() => {
            alert('¡Enlace copiado al portapapeles!');
        }).catch(err => {
            console.error('Error al copiar el enlace: ', err);
        
        });
    });
});