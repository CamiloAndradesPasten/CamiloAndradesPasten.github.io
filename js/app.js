/* click en header-button is header-nav toggle 'isActive*/

const button  = document.querySelector('.Header-button');
const nav = document.querySelector('.Header-nav');
const anchor = document.querySelector('.Header-a');

button.addEventListener('click', ()=>{
    nav.classList.toggle('isActive')
});

