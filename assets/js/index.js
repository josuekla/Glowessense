AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });

        document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelectorAll('#mobile-menu a');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Efeito de scroll no header
        window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
    });
    if (window.location.hash) {
        document.querySelector(`header nav a[href="${window.location.hash}"]`).classList.add('section-active');
    } else {
        document.querySelector('header nav a').classList.add('section-active');
    }
    });