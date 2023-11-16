import { userName } from '../../src/index.js';

export var lastPageLoaded = 'home';
var navCollection = document.getElementsByClassName("loginLogout");
export var loginNav = [];
export var loginStatus = false;

var modelUserName = userName;

for (let i = 0; i < navCollection.length; i++) {
    loginNav[i] = navCollection[i];
}
export function toggleMenu(btn)
{
    console.log("class toggle now v");
    btn.classList.toggle("open");
    console.log(btn);
}


export function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');

    setTimeout(() => {
        switch (pageID) {
            case '':
            case 'home':
                $.get(`pages/home.html`, function (data) {
                    $('#app').html(data);
                   })
                   .fail(function () {
                       alert("Error 404, page not found");
                      });
                lastPageLoaded = 'home';
                break;
            case 'signUp':
            case 'login':
                console.log("services: attempting now");
                authenticate.accountHandler(pageID);
                break;
            case 'loginPage':
                authenticate.accountHandler(pageID);
                $.get(`pages/loginPage.html`, function (data) {
                    $('#app').html(data);
                   })
                   .fail(function () {
                       alert("Error 404, page not found");
                      });
                break;
            case 'create':
                $.get(`pages/${pageID}.html`, function (data) {
                    $('#app').html(data);
                   })
                   .fail(function () {
                    alert("Error 404, page not found");
                   });
                lastPageLoaded = pageID;
                setTimeout(resetHeader, 50);
                break;
            default:
                $.get(`pages/${pageID}.html`, function (data) {
                    $('#app').html(data);
                   })
                   .fail(function () {
                    alert("Error 404, page not found");
                   });
                lastPageLoaded = pageID;
                break;
        }
    }, 500);
    console.log("lastPage: " + lastPageLoaded);
}

function resetHeader() {
    let createHeader = document.getElementById("createHeader");
    console.log(createHeader)
    createHeader.innerHTML = `Hey ${userName}, create your recipe today!`;
}