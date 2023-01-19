var divDesp = document.querySelector('.Header-desp');
var menuBtn = document.querySelector('.Header-btn');
function menuDesp() {
    menuBtn.addEventListener('click', function () {
        divDesp.classList.toggle('menuActive');
    });
}
menuDesp();
