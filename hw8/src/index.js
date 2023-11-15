import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { changeRoute, lastPageLoaded, loginNav, loginStatus } from "../dist/services/services.js";


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
    if (user != null) 
    {
        console.log("user logged in");
        $(".yourRecipes").removeClass("hide");
        loginNav.forEach((element) => {
            element.innerHTML = 'Logout';
        });
    } 
    else 
    {
        console.log("no user");
        $(".yourRecipes").addClass("hide");
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
    console.log(auth.currentUserser);
    if (pageID === 'loginPage')
    {
        if (loginNav[0].innerHTML === 'Logout')
        {
            signOut(auth);
            loginNav.forEach((element) => {
                element.innerHTML = 'Login';
            })
            return;
        }
        else
        {
            return;
        }
    }

    // Sign up inputs
    let emailAddress = $("#emailSU").val();
    let firstName = $("#firstNameSU").val();
    let lastName = $("#lastNameSU").val();
    let password = $("#passwordSU").val();

    // Login Inputs
    let loginEmail = $("#loginEmail").val();
    let loginPassword = $("#loginPassword").val();

    if (pageID === 'signUp')
    {
        createUserWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        user.displayName = `${firstName}`;
        console.log(user);

        loginNav.forEach((element) => {
            element.innerHTML = 'Logout';
        });
        window.location.hash = `${lastPageLoaded}`;

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
                element.innerHTML = 'Logout';
            });
            window.location.hash = `${lastPageLoaded}`;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }
}

$(document).ready(function () {
    initListeners();
    changeRoute();
})