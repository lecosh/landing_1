const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.menu-container');

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle('hidden');
})