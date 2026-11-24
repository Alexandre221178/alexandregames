function injectMysteriousIslandContent4() {
  const container = document.getElementById('mysterious-island-content4');
  if (!container) {
    return;
  }

  const data = mysteriousIslandData4[document.documentElement.lang] ?? mysteriousIslandData4.en;

  container.innerHTML = `<h3>${data.title}</h3>
<figure>
  <picture>
    <source media="(min-width: 768px)"
            srcset="../images/guides/mysterious-island/map4-1200px.webp"
            width="1173" height="697">
    <img src="../images/guides/mysterious-island/map4-800px.webp"
         alt="${data.imageAlt}"
         loading="lazy" width="800" height="475"
         style="width: 100%; height: auto;">
  </picture>
  <figcaption>${data.figcaption}</figcaption>
</figure>`;
}

document.addEventListener('DOMContentLoaded', injectMysteriousIslandContent4);
