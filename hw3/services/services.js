export let images = ["indy1.jpeg", "indy2.jpeg", "indy3.jpeg"];

export function switchPage(pageToLoad) {

    if (pageToLoad != "")
    {
        $.get(`pages/${pageToLoad}.html`, function (data) {
            $("#page").html(data);
        })
    }
    else
    {
        $.get(`pages/home.html`, function (data) {
            $("#page").html(data);
        })
    }
}
