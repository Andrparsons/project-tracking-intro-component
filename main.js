// DOM secltions

const menuBtn = document.querySelector(".menu-btn");

//initial state
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");

    showMenu = false;
  }
}
