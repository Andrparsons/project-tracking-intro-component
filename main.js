// DOM secltions

const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const links = document.querySelector(".links");

//initial state
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    overlay.classList.add("active");
    links.classList.add("active");

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    overlay.classList.remove("active");
    links.classList.remove("active");

    showMenu = false;
  }
}
