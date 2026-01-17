// Fonction pour obtenir l'URL partageable
function getShareableUrl() {
    const ogUrl = document.querySelector('meta[property="og:url"]')?.content;
    const currentUrl = window.location.href;

    // Retourne l'`og:url` si elle est présente, sinon l'URL actuelle.
    return ogUrl || currentUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    const shareableUrl = getShareableUrl();

    // Mettre à jour les liens de partage avec l'URL correcte
    document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=Vérifiez%20ce%20contenu:%20${encodeURIComponent(shareableUrl)}`;
    document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableUrl)}`;
    document.getElementById('reddit-share').href = `https://www.reddit.com/submit?url=${encodeURIComponent(shareableUrl)}&title=Vérifiez%20ce%20contenu`;

    // Fonction pour copier le lien
    document.getElementById('link-share').addEventListener('click', () => {
        navigator.clipboard.writeText(shareableUrl).then(() => {
            alert('Lien copié dans le presse-papiers !');
        }).catch(err => {
            console.error('Erreur lors de la copie du lien : ', err);
        
        });
    });
});