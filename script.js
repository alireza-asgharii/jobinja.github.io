const hamburgerMenu = document.querySelector(".hamburgerMenu");
const hamburgerMenuContainer = document.querySelector(
  ".hamburgerMenuContainer"
);

let clickMenu = false;

hamburgerMenu.addEventListener("click", hamburgerMenuHandler);

function hamburgerMenuHandler() {
  clickMenu = !clickMenu;
  if (clickMenu) {
    hamburgerMenuContainer.classList.add("hamburgerMenuOpen");
    hamburgerMenuContainer.classList.remove("hamburgerMenuClose");
    return;
  }
  hamburgerMenuContainer.classList.remove("hamburgerMenuOpen");
  hamburgerMenuContainer.classList.add("hamburgerMenuClose");
}
