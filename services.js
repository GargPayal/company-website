const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click',()=>{
    nav.classList.toggle('v-resp');
    navbar.classList.toggle('h-resp');

})
