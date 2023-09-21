import {switchPage, images} from "../services/services.js";

function initializeListeners() {
  $(window).on("hashchange", switchPage);
  switchPage();

}

$(document).ready(function () {
  initializeListeners();
});

function preloadImage(imageArray)
{
  imageArray.forEach( (item) => {
    let image = new Image();
    image.src = `./images/${item}`;
  })
}

preloadImage(images);