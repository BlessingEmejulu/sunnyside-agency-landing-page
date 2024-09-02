document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navBox = document.querySelector('.nav-box');
    const navLinks = document.querySelectorAll('.nav-box li a');

    hamburgerIcon.addEventListener('click', () => {
        navBox.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navBox.classList.remove('active');
        });
    });
});