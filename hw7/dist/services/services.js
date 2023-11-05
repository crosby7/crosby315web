export var lastPageLoaded = 'home';
var navCollection = document.getElementsByClassName("loginLogout");
export var loginNav = [];
export var loginStatus = false;


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

    // if (pageID != '') {
    //     $.get(`pages/${pageID}.html`, function (data) {
    //         $('#app').html(data);
    //        })
    //        .fail(function () {
    //         alert("Error 404, page not found");
    //        });
    // } 
    // else if (pageID == 'home' || pageID == '') {
    //     $.get(`pages/home.html`, function (data) {
    //      $('#app').html(data);
    //     })
    //     .fail(function () {
    //         alert("Error 404, page not found");
    //        });
    // }
    // else {
    //     alert("Error 404, page not found");
    // }

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
            console.log("now checking loginstatus: " + loginStatus);
            if (loginStatus)
            {
                console.log("attempting last page load");
                $.get(`pages/${lastPageLoaded}.html`, function (data) {
                    $('#app').html(data);
                   })
                   .fail(function () {
                       alert("Error 404, page not found");
                      });
            }
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
    console.log("lastPage: " + lastPageLoaded);
}