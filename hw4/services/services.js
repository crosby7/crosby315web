let modal = document.getElementById("modal");
let modalContent = document.getElementById("modalContent");
let modalSuccess = document.getElementById("modalSuccess");

export function openModal() {
    modal.classList.toggle("openModal");
    modal.classList.toggle("hidden");
}

export function nextModal() {
    modalContent.classList.toggle("hidden");
    modalContent.classList.toggle("openModalContent");
    console.log("modalContent:" + modalContent.classList);
    modalSuccess.classList.toggle("openModal");
    modalSuccess.classList.toggle("hidden");
    console.log("modalSuccess:" + modalSuccess.classList);


    console.log("settingTimeout");
    setTimeout(loadNextPage, 2000);
}

function loadNextPage() {
    console.log("2000 ms have passed");
    window.location.href = "profile.html";
}
