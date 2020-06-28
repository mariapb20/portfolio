var menu = document.getElementById("menu");
var hamburguesa = document.getElementById("menu-icon");
var icon = document.getElementById("burger");
function toggleMenu() {
  menu.classList.toggle("menu-open");
  icon.classList.toggle("gg-menu");
  icon.classList.toggle("gg-close");
}
hamburguesa.addEventListener("click", toggleMenu);
