const hamburger = document.querySelector('.nav--hamburger');
const hamburgerBars = document.querySelectorAll('.line');
const navSection = document.querySelector('.nav--section');
const body = document.querySelector('body');

hamburger.addEventListener('click', function () {
    hamburgerBars.forEach(bar => bar.classList.toggle('color-change'));
    hamburger.classList.toggle('rotate');
    navSection.classList.toggle('slideIn');
})

