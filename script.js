// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-nav-menu');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('#home h1, #home h2, #home p, #home a', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#home',
        start: 'top 80%',
    }
});

gsap.from('#about img', {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
    }
});

gsap.from('#projects .bg-[#1d3557]', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%',
    }
});

