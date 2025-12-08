const icons = document.querySelectorAll('.contact_icon svg');

icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.stroke = '#1249d6';
//     // icon.style.transform = 'scale(0.8)';
//     // icon.style.filter = 'drop-shadow(0 0 6px #1249d6)';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.stroke = '#000000';
//     // icon.style.transform = 'scale(1)';
//     // icon.style.filter = 'none';
  });
});

// const header = document.querySelector(".video_header");

// // HOVER → fondo blanco + texto negro
// header.addEventListener("mouseover", () => {
//     header.style.background = "white";
//     header.querySelectorAll("*").forEach(el => {
//         el.style.color = "black";
//     });
// });

// // MOUSE OUT → fondo transparente + texto blanco
// header.addEventListener("mouseout", () => {
//     header.style.background = "transparent";
//     header.querySelectorAll("*").forEach(el => {
//         el.style.color = "white";
//     });
// });
