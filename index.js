const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    window.open("about.html");
})

const btn_sm = document.querySelector('.btn-sm');
btn_sm.addEventListener('click',()=>{
    window.open("about.html");
})

const btns = document.querySelector('.centre');
btns.addEventListener('click', ()=>{
    window.open("services.html");
})

const counter = document.querySelectorAll('.counter');
counter.forEach((counter) => {
    counter.innerHTML = 0
    const updatecount = () =>{
        const targetcount = +counter.getAttribute('data-target');
        const startingcount = +counter.innerHTML;
        const incre = Math.round(targetcount / 10) ;
        if(startingcount < targetcount){
            counter.innerHTML = `${startingcount + incre}`;
            setTimeout(updatecount,100);
        }else{
            counter.innerHTML = targetcount;
        }
    }
updatecount();
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click',()=>{
    nav.classList.toggle('v-resp');
    navbar.classList.toggle('h-resp');

})


