import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { changeRoute, lastPageLoaded, loginNav } from "../dist/services/services.js";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBzZQsPdoefcWyPm4MKHPTEBeTnxmsRslI",
    authDomain: "n315-cc.firebaseapp.com",
    projectId: "n315-cc",
    storageBucket: "n315-cc.appspot.com",
    messagingSenderId: "124018914014",
    appId: "1:124018914014:web:df6f512caa8a82d124484f",
    measurementId: "G-XEWMTQLJXY"
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

// App.js 
var mobileBtn = document.getElementById("hamburger");
console.log(mobileBtn);


function initListeners() {
    mobileBtn.addEventListener("click", () => {
        mobileBtn.classList.toggle("open");
    });

    window.addEventListener("hashchange", changeRoute);
}

export function accountHandler(pageID) {
    // Sign up inputs
    let emailAddress = $("#emailSU").val();
    let firstName = $("#firstNameSU").val();
    let lastName = $("#lastNameSU").val();
    let password = $("#passwordSU").val();

    // Login Inputs
    let loginEmail = $("#loginEmail").val();
    let loginPassword = $("#loginPassword").val();

    if (pageID === 'loginPage')
    {
        if (loginNav[0].innerHTML === 'Logout')
        {
            signOut(auth);
        }
    }
    if (pageID === 'signUp')
    {
        createUserWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        currentUser.displayName = `${firstName}`;
        console.log(user);

        loginNav.forEach((element) => {
            innerHTML = 'Logout';
        });
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
        });
    }
    else if (pageID === 'login')
    {
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            loginNav.forEach((element) => {
                innerHTML = 'Logout';
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }
    window.location.hash = `${lastPageLoaded}`;
}

$(document).ready(function () {
    initListeners();
    changeRoute();
})