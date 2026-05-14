'use strict';

const sorteos = document.querySelectorAll('.sorteo');

/* Transicion de transitionOverlay_01 */
const trans = () => {
    overlay.classList.add('active');
    setTimeout(() => {
        overlay.classList.remove('active');
    }, 3500);
}

const overlay = document.querySelector('.transitionOverlay_01');
sorteos.forEach(sorteo => {
    sorteo.addEventListener('click', trans);
});


