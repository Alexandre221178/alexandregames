// 共有URLを取得する関数
function getShareableUrl() {
    const ogUrl = document.querySelector('meta[property="og:url"]')?.content;
    const currentUrl = window.location.href;

    // `og:url`が存在する場合はそれを返し、そうでない場合は現在のURLを返す。
    return ogUrl || currentUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    const shareableUrl = getShareableUrl();

    // 正しいURLで共有リンクを更新
    document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=このコンテンツを確認してください:%20${encodeURIComponent(shareableUrl)}`;
    document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableUrl)}`;
    document.getElementById('reddit-share').href = `https://www.reddit.com/submit?url=${encodeURIComponent(shareableUrl)}&title=このコンテンツを確認してください`;

    // リンクをコピーする関数
    document.getElementById('link-share').addEventListener('click', () => {
        navigator.clipboard.writeText(shareableUrl).then(() => {
            alert('リンクがクリップボードにコピーされました！');
        }).catch(err => {
            console.error('リンクのコピーエラー: ', err);
        
        });
    });
});