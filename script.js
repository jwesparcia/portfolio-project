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
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        }, false);

        // Close mobile menu when clicking a link
        const mobileNavLinks = mobileNavMenu.getElementsByTagName('a');
        for (let link of mobileNavLinks) {
            link.addEventListener('click', () => {
                mobileNavMenu.classList.add('translate-x-full');
            });
        }