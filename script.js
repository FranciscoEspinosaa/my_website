// =========================
// MENÚ HAMBURGUESA (RESPONSIVE)
// =========================
const toggleButton = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const overlay = document.querySelector('.menu-overlay');

if (toggleButton && navMenu) {
  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');

    // ☰ ↔ ✕
    toggleButton.textContent = navMenu.classList.contains('active')
      ? '✕'
      : '☰';
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

// =========================
// SEARCH GLOBAL (SITE INDEX)
// =========================
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query.length < 2) return;

  SEARCH_INDEX.forEach(item => {
    if (
      item.title.toLowerCase().includes(query) ||
      item.text.toLowerCase().includes(query)
    ) {
      const result = document.createElement("div");
      result.innerHTML = `
        <strong>${item.title}</strong><br>
        <small>${item.text}</small>
      `;

      result.addEventListener("click", () => {
        searchModal.classList.remove("active");
        searchInput.value = "";
        searchResults.innerHTML = "";
      
        window.location.href = item.url;
      });


      searchResults.appendChild(result);
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "/") {
    e.preventDefault();
    searchModal.classList.add("active");
    searchInput.focus();
  }
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
// IMAGE LIGHTBOX (COURSES)
// =========================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imageModalImg");
const courseImages = document.querySelectorAll(".course-card__img");

courseImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.dataset.full || img.src;
  });
});

// Click fuera = cerrar
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    modalImg.src = "";
  }
});

// ESC = cerrar (detalle pro)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
    modalImg.src = "";
  }
});
