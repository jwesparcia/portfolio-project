    document.addEventListener("DOMContentLoaded", () => {
        // GSAP Animation for Home Section Text
        gsap.from("#home h3", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            delay: 0.5,
        });

        gsap.from("#home h1", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            delay: 1,
        });

        gsap.from("#home h2", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            delay: 1.5,
        });

        gsap.from("#home p", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            delay: 2,
        });

        gsap.from("#home a", {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power3.out",
            delay: 2.5,
        });

        // GSAP ScrollTrigger for About Section
        gsap.from("#about", {
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%", 
                end: "top 40%",
                scrub: true,
            },
            opacity: 0,
            y: 100,
            duration: 1.5,
        });

        // GSAP Animation for each Project Card
        gsap.utils.toArray(".project-card").forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "top 60%",
                    scrub: true,
                },
                opacity: 0,
                y: 50,
                duration: 1,
                delay: index * 0.2,
            });
        });

        // GSAP ScrollTrigger for Contact Section
        gsap.from("#contact", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            },
            opacity: 0,
            y: 100,
            duration: 1.5,
        });
    });

    // Existing Navigation and Scroll Control Code
    const navToggle = document.getElementById('nav-toggle');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');

    navToggle.addEventListener('click', () => {
        mobileNavMenu.classList.toggle('translate-x-full');
    });

    // Hide navigation on scroll
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    const navbarHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
            // Scrolling down & past the navbar
            header.classList.remove('nav-visible');
            header.classList.add('nav-scrolled');
            if (!mobileNavMenu.classList.contains('translate-x-full')) {
                mobileNavMenu.classList.add('translate-x-full');
            }
        } else if (scrollTop < lastScrollTop) {
            // Scrolling up
            header.classList.remove('nav-scrolled');
            header.classList.add('nav-visible');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

    // Close mobile menu when clicking a link
    const mobileNavLinks = mobileNavMenu.getElementsByTagName('a');
    for (let link of mobileNavLinks) {
        link.addEventListener('click', () => {
            mobileNavMenu.classList.add('translate-x-full');
        });
    }