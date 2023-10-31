import {changeRoute} from "../services/services.js";

var mobileBtn = document.getElementById("hamburger");
console.log(mobileBtn);


function initListeners() {
    mobileBtn.addEventListener("click", () => {
        mobileBtn.classList.toggle("open");
    });

    window.addEventListener("hashchange", changeRoute);
}


$(document).ready(function () {
    initListeners();
    changeRoute();
})