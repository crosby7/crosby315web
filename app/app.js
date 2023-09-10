import {loadPage, hamburgerMenu, images} from "../services/services.js";

function initializeListeners() {
  $(window).on("hashchange", loadPage);
  loadPage();

  $("#hamburgerMenu").on("click", openHamburger);
}

$(document).ready(function () {
  initializeListeners();
});

function openHamburger() {
  hamburgerMenu.classList.toggle("openHamburger");
}

function preloadImage(imageArray)
{
  imageArray.forEach( (item) => {
    let image = new Image();
    image.src = `../images/${item}`;
  })
}

preloadImage(images);