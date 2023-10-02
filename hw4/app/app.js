import {openModal, nextModal} from "../services/services.js";

function initializeListeners() {
  $(".login").on("click", openModal);

  $("#submit").on("click", nextModal)
}


$(document).ready(function () {
  initializeListeners();
});