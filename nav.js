// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navBox = document.querySelector('.nav-box');
    const navLinks = document.querySelectorAll('.nav-box li a');

    // Toggle the mobile menu when the hamburger icon is clicked
    hamburgerIcon.addEventListener('click', () => {
        navBox.classList.toggle('active');
    });

    // Hide the mobile menu when a menu item is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navBox.classList.remove('active');
        });
    });
});