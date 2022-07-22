const userContainer = document.querySelector(".user-container");
const moreTools = document.querySelector(".moreTools");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const hamburgerMenuContainer = document.querySelector(
  ".hamburgerMenuContainer"
);
const selectCity = document.querySelector(".selectCity");
const selectCityItems = selectCity.querySelector(".items");
const slectArrow = selectCity.querySelector(".arrow");
const city = selectCity.querySelector(".city");
const cityItems = selectCity.querySelector("ul").querySelectorAll("li");
const cityItemsUl = selectCity.querySelector("ul");

let clickMenu = false;
let clickTools = false;

hamburgerMenu.addEventListener("click", hamburgerMenuHandler);
userContainer.addEventListener("click", toolsHandler);

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

function toolsHandler() {
  clickTools = !clickTools;
  if (clickTools) {
    moreTools.classList.remove("toolsClose");
    moreTools.classList.add("toolsShow");
    return;
  }
  moreTools.classList.remove("toolsShow");
  moreTools.classList.add("toolsClose");
}

document.addEventListener("click", (e) => {
  const ele = e.target;
  if (
    hamburgerMenuContainer.classList.contains("hamburgerMenuOpen") &&
    !ele.classList.contains("fa-bars") &&
    !(ele.id === "menuToggle")
  ) {
    hamburgerMenuContainer.classList.remove("hamburgerMenuOpen");
    hamburgerMenuContainer.classList.add("hamburgerMenuClose");
    clickMenu = false;
  }

  if (
    !(ele.id === "toolsToggle") &&
    moreTools.classList.contains("toolsShow")
  ) {
    moreTools.classList.remove("toolsShow");
    moreTools.classList.add("toolsClose");
    clickTools = false;
  }
});

let selectCityisOpen = false;

selectCity.addEventListener("click", (e) => {
  if (!e.target.classList.contains("toggleInput")) {
    selectCityisOpen = !selectCityisOpen;

    selectCityItems.classList.toggle("showCityBox");
    if (selectCityisOpen) {
      slectArrow.classList.remove("rotateArrowRevers");
      slectArrow.classList.add("rotateArrow");
    } else {
      slectArrow.classList.remove("rotateArrow");
      slectArrow.classList.add("rotateArrowRevers");
    }
  }
});

for (let i = 0; i < cityItems.length; i++) {
  cityItems[i].addEventListener("click", () => {
    const value = cityItems[i].innerHTML;
    city.innerHTML = value;
    slected(city.innerHTML, value)
  });
}



