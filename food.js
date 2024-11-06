let menu = document.querySelector(`#menu-bar`);
let navbar = document.querySelector(`.navbar`);
let searchbtn = document.querySelector(`#search-btn`);
let searchbar = document.querySelector(`.search-bar-container`);
let formbtn = document.querySelector(`#login-btn`);
let loginform = document.querySelector(`.login-form-container`);
let formclose= document.querySelector(`#form-cross`);

window.onscroll = () =>{

    searchbtn.classList.remove(`fa-times`);
    searchbar.classList.remove(`active`);


}

searchbtn.addEventListener(`click`, () =>{
    searchbtn.classList.toggle(`fa-times`);
    searchbar.classList.toggle(`active`);
})

formbtn.addEventListener(`click`, () =>{
    loginform.classList.add(`active`);

})

formclose.addEventListener(`click`, () =>{
    loginform.classList.remove(`active`);

})


menu.onclick = () =>{

    menu.classList.toggle(`fa-times`);
    navbar.classList.toggle(`active`);

}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('.active');

}
function loader(){
    document.querySelector(`.loader`).classList.add(`fadeout`);
}
function fadeout(){
    setInterval(loader, 1500);
}
window.onload = fadeout();