import {switchPage, images} from "../services/services.js";

function initializeListeners() {
  $(window).on("hashchange", newRoute);
  newRoute();

}

function newRoute() {
  let hashTag = window.location.hash;
  let pageToLoad = hashTag.replace("#", "");

  switchPage(pageToLoad);
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