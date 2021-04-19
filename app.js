const option = document.querySelector('.option');
const navlinks = document.querySelector('.nav__links');

option.addEventListener('click', ()=>{
    navlinks.classList.toggle('show')
})