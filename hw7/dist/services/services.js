
export function toggleMenu(btn)
{
    console.log("class toggle now v");
    btn.classList.toggle("open");
    console.log(btn);
}


export function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');

    if (pageID != '') {
        $.get(`pages/${pageID}.html`, function (data) {
            $('#app').html(data);
           })
           .fail(function () {
            alert("Error 404, page not found");
           });
    } 
    else if (pageID == 'home' || pageID == '') {
        $.get(`pages/home.html`, function (data) {
         $('#app').html(data);
        })
        .fail(function () {
            alert("Error 404, page not found");
           });
    }
    else {
        alert("Error 404, page not found");
    }

    switch (pageID) {
        case '':
        case 'home':
            $.get(`pages/home.html`, function (data) {
                $('#app').html(data);
               })
               .fail(function () {
                   alert("Error 404, page not found");
                  });
            break;
        case 'signUp':
            createNewUser();
            break;
        case 'login':
            loginUser();
            break;
        default:
            $.get(`pages/${pageID}.html`, function (data) {
                $('#app').html(data);
               })
               .fail(function () {
                alert("Error 404, page not found");
               });
            break;
    }
}