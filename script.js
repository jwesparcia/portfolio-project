const toggleButton = document.getElementById('nav-toggle');
const mobileNavMenu = document.getElementById('mobile-nav-menu');

toggleButton.addEventListener('click', () => {
    mobileNavMenu.classList.toggle('translate-x-full');
    mobileNavMenu.classList.toggle('translate-x-0');
});

