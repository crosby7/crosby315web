
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
        });
    } 
    else if (pageID == 'home') {
        $.get(`pages/home.html`, function (data) {
         $('#app').html(data);
        });
    }
    else {
        alert("Error 404, page not found")
    }
}