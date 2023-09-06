let button_about = document.getElementById("button-about");
let button_shop = document.getElementById("button-shop");
let button_our_work = document.getElementById("button-our-work");
let button_team = document.getElementById("button-team");

button_about.addEventListener('click', () => {
    window.location.href = "/about/"
})

button_our_work.addEventListener('click', () => {
    window.location.href = "/showcase/"
})

button_team.addEventListener('click', () => {
    window.location.href = "/our-team/"
})
