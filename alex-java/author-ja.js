document.addEventListener("DOMContentLoaded", function () {

const container = document.getElementById("author-alexandre-games");
if (!container) return;

const path = window.location.pathname;


/* ==============================
CSS を挿入
================================ */

if (!document.getElementById("alex-author-style")) {

const style = document.createElement("style");
style.id = "alex-author-style";

style.textContent = `

.about-author{
display:flex;
gap:15px;
margin:40px 0 25px;
padding:20px;
border:1px solid #e5e5e5;
border-radius:8px;
background:#fafafa;
align-items:flex-start;
}

.about-author img{
width:90px;
height:90px;
border-radius:50%;
object-fit:cover;
}

.author-text h3{
margin-top:0;
font-size:18px;
}

.author-text p{
margin-bottom:10px;
font-size:16px;
line-height:1.5;
}

/* クリエイターサポートボックス */

.creator-support-box{
margin:30px 0;
padding:25px;
border-radius:10px;
background:linear-gradient(135deg,#1e293b,#111827);
color:#ffffff;
text-align:center;
box-shadow:0 6px 20px rgba(0,0,0,0.25);
}

.creator-support-box p,
.creator-support-box strong,
.creator-support-box span,
.creator-support-box a{
color:#ffffff;
}

.creator-header{
font-size:22px;
font-weight:700;
margin-bottom:10px;
}

.creator-text{
font-size:17px;
margin-bottom:12px;
opacity:0.9;
color:white;
}

.creator-code-box{
background:white;
color:#d32f2f;
display:inline-block;
padding:10px 18px;
border-radius:8px;
margin:12px 0;
font-size:18px;
font-weight:700;
}

.creator-code-box span{
display:block;
font-size:16px;
color:#444;
font-weight:500;
}

.creator-main-button{
display:inline-block;
margin-top:12px;
padding:12px 24px;
background:#ff3b3b;
color:white;
text-decoration:none;
border-radius:8px;
font-weight:700;
font-size:15px;
transition:0.2s;
}

.creator-main-button:hover{
background:#ff1f1f;
transform:scale(1.05);
}

.creator-small{
font-size:16px;
margin-top:10px;
opacity:0.8;
}

`;

document.head.appendChild(style);

}


/* ==============================
著者情報
================================ */

const authorHTML = `

<div class="about-author">

<img src="/imagens/alexandre-domingos.webp"
alt="Alexandre Domingos - ブログ著者"
loading="lazy">

<div class="author-text">

<h3>著者について</h3>

<p>
<strong>Alexandre Domingos</strong> は工学の大学院学位を持ち、生産スーパーバイザーとして働いています。
余暇には
<a href="https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw" target="_blank" rel="noopener">
<strong>YouTuber</strong></a>、<strong>ブロガー</strong>、そして
<a href="https://alexandregames.com"><strong>Alexandre Games</strong></a> の
<strong>ウェブマスター</strong>として活動しています。
</p>

<p>
彼は5歳の頃からゲームの世界に没頭しており、MSX、Master System、Nintendo、
そして古い286 PCなどのクラシックなプラットフォームからゲームを始めました。
2019年からはコミュニティ向けにガイド、チュートリアル、そして高度な戦略を制作しています。
</p>

</div>

</div>

`;

/* ==============================
give me a coffee HTML FOR HERO WARS: DOMINION ERA
================================ */
const coffeeHTML = `

<div class="creator-support-box">

<div class="creator-header">
☕ このガイドは役に立ちましたか？
</div>

<p class="creator-text">
このガイドが役に立った場合は、
<strong>アレクサンドル・ゲームズ</strong>のプロジェクトを
コーヒー1杯で応援していただけると嬉しいです。
</p>

<a href="https://ko-fi.com/alexandregamesoficial"
target="_blank"
rel="noopener"
class="creator-main-button">
コーヒーで応援する ☕
</a>

<p class="creator-small">
あなたのサポートは、サイトで新しいガイドや戦略を公開し続ける助けになります。
</p>

</div>

`;



/* ==============================
クリエイターコード (creator code) nexters
================================ */

const creatorHTML = `

<div class="creator-support-box">

<div class="creator-header">
🎮 このガイドは役に立ちましたか？
</div>

<p class="creator-text">
このガイドが戦闘で勝つために役立ったり、ゲームプレイの改善に役立ったなら、
<strong>アレクサンドレ・ゲームズ</strong> の活動をサポートすることを検討してください。
</p>

<p class="creator-text">
Hero Wars の公式 Web Shop で次のクリエイターコードを使用してください：
</p>

<div class="creator-code-box">
<span>クリエイターコード</span>
ALEXANDREGAMES
</div>

<a href="https://hwa.nexters.com/c/ALEXANDREGAMES"
target="_blank"
rel="noopener"
class="creator-main-button">
公式Webショップを見る
</a>

<p class="creator-small">
このコードを使用すると、新しいガイドやチュートリアルの制作を支援できます。
追加料金はかかりません。
<br>
🔥 50人以上のプレイヤーがすでにアレクサンドレ・ゲームズをサポートしています！
</p>

</div>

`;


/* ==============================
著者を挿入
================================ */

container.innerHTML = authorHTML;


/* ==============================
クリエイターコードを挿入（Hero Wars Alliance のみ）
================================ */

if (path.includes("hero-wars-alliance")) {
container.innerHTML += creatorHTML;
}

if (path.includes("hero-wars-dominion-era")) {
container.innerHTML += coffeeHTML;
}

});