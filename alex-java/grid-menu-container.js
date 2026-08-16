// ================= CSS dentro do JS =================
const style = document.createElement("style");
style.innerHTML = `
.img-menumobile *,
.img-menupc * {
  pointer-events: auto;
}

figure::before,
figure::after {
  pointer-events: none;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  max-width: 1000px;
  margin: auto;
}

.grid-item {
  text-align: center;
}

.grid-item img {
  display: block;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border-radius: 10px;
  transition: transform 0.3s ease;
  border: 4px solid #5654b3;
}

.grid-item a:hover img,
.grid-item a:focus-visible img,
.grid-item a:active img {
  transform: scale(1.05);
}

.grid-item picture {
  display: block;
}

.grid-item strong {
  display: block;
  margin-top: 1px;
  font-size: 15px;
}

.grid-item span {
  display: block;
  margin-top: 5px;
  font-size: 12px;
  color: gray;
}

.grid-item a {
  display: block;
  text-decoration: none;
  color: inherit;
}

/* Responsivo */
@media (max-width: 768px) {
  .grid-3 {
    grid-template-columns: 1fr;
    width: 80%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .grid-item img {
    transition: none;
  }
}
`;
document.head.appendChild(style);

// ================= JS normal =================
const container = document.getElementById("grid-container");

items.forEach(item => {
  const div = document.createElement("div");
  div.className = "grid-item";
  const updated = (item.updated || "").trim();
  const hasUpdated = updated && !/^updated\s*:?\s*$/i.test(updated);
  const src500 = item.src500 || item.src400 || "";
  const src400 = item.src400 || item.src500 || "";

  // margem top
  div.style.marginTop = "13px";

  div.innerHTML = `
    <a href="${item.link}">
      <picture>
        <source media="(min-width: 769px)" srcset="${src500}">
        <img src="${src400}" alt="${item.alt}" title="${item.title}" loading="lazy">
      </picture>
      <strong>${item.strong}</strong>
      ${hasUpdated ? `<span>${updated}</span>` : ""}
    </a>
  `;

  container.appendChild(div);
});
