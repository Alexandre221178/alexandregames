// Funktion zum Abrufen der teilbaren URL
function getShareableUrl() {
    const ogUrl = document.querySelector('meta[property="og:url"]')?.content;
    const currentUrl = window.location.href;

    // Gibt die `og:url` zurück, falls vorhanden, andernfalls die aktuelle URL.
    return ogUrl || currentUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    const shareableUrl = getShareableUrl();

    // Teilen-Links mit der korrekten URL aktualisieren
    document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=Schau%20dir%20diesen%20Inhalt%20an:%20${encodeURIComponent(shareableUrl)}`;
    document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableUrl)}`;
    document.getElementById('reddit-share').href = `https://www.reddit.com/submit?url=${encodeURIComponent(shareableUrl)}&title=Schau%20dir%20diesen%20Inhalt%20an`;

    // Funktion zum Kopieren des Links
    document.getElementById('link-share').addEventListener('click', () => {
        navigator.clipboard.writeText(shareableUrl).then(() => {
            alert('Link in die Zwischenablage kopiert!');
        }).catch(err => {
            console.error('Fehler beim Kopieren des Links: ', err);
        
        });
    });
});