// =========================
// MENÚ HAMBURGUESA
// =========================
const toggleButton = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

function closeMenu() {
  navMenu.classList.remove('active');
  document.body.classList.remove('menu-open');
  toggleButton.textContent = '☰';
}

function openMenu() {
  navMenu.classList.add('active');
  document.body.classList.add('menu-open');
  toggleButton.textContent = '✕';
}

toggleButton.addEventListener('click', (e) => {
  e.stopPropagation(); // 🔑 MUY IMPORTANTE
  navMenu.classList.contains('active') ? closeMenu() : openMenu();
});

// =========================
// CERRAR EN RESIZE
// =========================
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

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

searchBtn.addEventListener("click", () => {
  closeMenu(); // 🔑 sincroniza ícono

  searchModal.classList.add("active");
  searchInput.focus();
});

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
    modal.classList.remove("active");127.
    modalImg.src = "";
  }
});

// =========================
// CERRAR AL CLICK EN LINKS
// =========================
document.querySelectorAll('.nav__menu a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});