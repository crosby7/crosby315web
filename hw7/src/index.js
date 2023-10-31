import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseApp = initializeApp({
apiKey: "AIzaSyB6EJ9XEpVW0ECBwQdaBGqBKe5vkuIjgA8",
authDomain: "n423-data-todd.firebaseapp.com",
databaseURL: "https://n423-data-todd.firebaseio.com",
projectId: "n423-data-todd",
storageBucket: "n423-data-todd.appspot.com",
messagingSenderId: "125541102309",
appId: "1:125541102309:web:1b03c685f82b07ea1f1a0c",
measurementId: "G-BMCJDJMM21",
});

const auth = getAuth(firebaseApp);

// detect auth state

onAuthStateChanged(auth, (user) => {

if (user != null) {

console.log("logged in");

} else {

console.log("No user");

}

});





import {changeRoute} from "../dist/services/services.js";

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