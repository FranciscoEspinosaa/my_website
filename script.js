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
