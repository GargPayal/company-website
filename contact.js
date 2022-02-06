const form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault() //prevent from autosubmitting
    const username = document.querySelector('#username').value;
    console.log(username);
    const email = document.querySelector('#email').value;
    console.log(email);
    const number = document.querySelector('#number').value;
    console.log(number);
    const message = document.querySelector('#message').value;
    console.log(message);
})

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click',()=>{
    nav.classList.toggle('v-resp');
    navbar.classList.toggle('h-resp');

})
