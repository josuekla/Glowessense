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
        
        // Efeito de transparência no header
        if (scrollPosition > 100) {
            header.classList.add('header-scrolled');
            header.classList.remove('header-transparent');
        } else {
            header.classList.add('header-transparent');
            header.classList.remove('header-scrolled');
        }
        
        // Ativar link correspondente à seção visível
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('section-active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('section-active');
                    }
                });
            }
        });
    });


    // Lógica para o menu do
    // (Removido: já declarado anteriormente)

    
    // Inicializa com header transparente
    header.classList.add('header-transparent');
    
    // Ativa o link da primeira seção por padrão
    if (window.location.hash) {
        document.querySelector(`header nav a[href="${window.location.hash}"]`).classList.add('section-active');
    } else {
        document.querySelector('header nav a').classList.add('section-active');
    }
    });