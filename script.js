// =========================
// MENÚ HAMBURGUESA (RESPONSIVE)
// =========================
const toggleButton = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

if (toggleButton && navMenu) {
  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// =========================
// CONTACT ICONS (HOVER SVG)
// =========================
const contactIcons = document.querySelectorAll('.contact__icons svg');

contactIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.stroke = '#1249d6';
    icon.style.transition = 'stroke 0.3s ease';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.stroke = '#000000';
  });
});

// =========================
// CERRAR MENÚ AL HACER CLICK (MOBILE)
// =========================
const navLinks = document.querySelectorAll('.nav__menu a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});

// =========================
// SEARCH GLOBAL
// =========================
const searchBtn = document.getElementById("searchBtn");
const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Abrir buscador
searchBtn.addEventListener("click", () => {
  searchModal.classList.add("active");
  searchInput.focus();
});

// Cerrar al hacer click fuera
searchModal.addEventListener("click", (e) => {
  if (e.target === searchModal) {
    searchModal.classList.remove("active");
    searchInput.value = "";
    searchResults.innerHTML = "";
  }
});

// Buscar coincidencias
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query.length < 2) return;

  // Busca texto en toda la página
  const elements = document.querySelectorAll("section, article, p, h1, h2, h3");

  elements.forEach(el => {
    if (el.textContent.toLowerCase().includes(query)) {
      const result = document.createElement("div");
      result.textContent = el.textContent.trim().substring(0, 80) + "...";

      result.addEventListener("click", () => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        searchModal.classList.remove("active");
      });

      searchResults.appendChild(result);
    }
  });
});
