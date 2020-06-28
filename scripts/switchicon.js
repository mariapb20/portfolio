var menuleft = document.getElementById("dropbtn");
var iconmenu = document.getElementById("menu-left");
function toggleMenuleft() {
  menuleft.classList.toggle("dropdown-content");
  icon.classList.toggle("gg-menu-left");
  icon.classList.toggle("gg-menu-close");
}
iconmenu.addEventListener("click", toggleMenuleft);