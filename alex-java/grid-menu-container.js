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
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s;
  border: 4px solid #5654b3;
}

.grid-item img:hover {
  transform: scale(1.05);
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
`;
document.head.appendChild(style);

// ================= JS normal =================
const container = document.getElementById("grid-container");

items.forEach(item => {
  const div = document.createElement("div");
  div.className = "grid-item";
  const updated = (item.updated || "").trim();
  const hasUpdated = updated && !/^updated\s*:?\s*$/i.test(updated);

  // margem top
  div.style.marginTop = "13px";

  div.innerHTML = `
    <a href="${item.link}">
      <img src="${item.src500}" alt="${item.alt}" title="${item.title}" loading="lazy">
      <br><strong>${item.strong}</strong>
      ${hasUpdated ? `<span>${updated}</span>` : ""}
    </a>
  `;

  container.appendChild(div);
});
