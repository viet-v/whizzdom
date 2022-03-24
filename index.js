const hamburger = document.querySelector('.nav--hamburger');    // hamburger menu
const hamburgerBars = document.querySelectorAll('.line');       // hamburger menu bars
const navSection = document.querySelector('.nav--section');     // navigation section
const navOverlay = document.querySelector('.nav-overlay');      // slight overlay on screen when open navigation


hamburger.addEventListener('click', function () {         // click on hamburger to open/close navigation
    hamburgerBars.forEach(bar => bar.classList.toggle('color-change'));
    hamburger.classList.toggle('rotate');
    navSection.classList.toggle('slideIn');
    navOverlay.classList.toggle('display');
})

navOverlay.addEventListener('click', function () {        // click on overlay to close navigation
    hamburgerBars.forEach(bar => bar.classList.toggle('color-change'));
    hamburger.classList.toggle('rotate');
    navSection.classList.toggle('slideIn');
    navOverlay.classList.toggle('display');
})

