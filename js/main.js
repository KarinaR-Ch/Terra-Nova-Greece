// Main JavaScript file that initializes all functionality
document.addEventListener('DOMContentLoaded', function() {
    // IntersectionObserver для анімації тексту
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.animate').forEach(el => observer.observe(el));

    // Scroll to top button
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
        scrollBtn.classList.toggle("show", window.scrollY > 300);
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Mobile header behavior
    const header = document.querySelector('.header');
    const logo = document.querySelector('.header__logo');
    let isMobile = window.innerWidth <= 768;

    function updateHeaderOnScroll() {
        if (!isMobile) return;
        
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            header.classList.add('scrolled');
            logo.classList.add('hidden');
            
            // Determine background color and adjust menu icon color
            const sections = document.querySelectorAll('section');
            let currentSection = null;
            
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section;
                }
            });
            
            if (currentSection) {
                // Check if section has dark background
                const computedStyle = window.getComputedStyle(currentSection);
                const bgColor = computedStyle.backgroundColor;
                
                // Simple check for dark backgrounds
                if (bgColor.includes('0, 0, 0') || bgColor.includes('rgb(34, 31, 32)') || 
                    currentSection.id === 'destinations' || currentSection.id === 'join') {
                    header.classList.add('dark-bg');
                    header.classList.remove('light-bg');
                } else {
                    header.classList.add('light-bg');
                    header.classList.remove('dark-bg');
                }
            }
        } else {
            header.classList.remove('scrolled');
            header.classList.remove('light-bg');
            header.classList.remove('dark-bg');
            logo.classList.remove('hidden');
        }
    }

    function checkMobileView() {
        isMobile = window.innerWidth <= 768;
        if (!isMobile) {
            header.classList.remove('scrolled');
            header.classList.remove('light-bg');
            header.classList.remove('dark-bg');
            logo.classList.remove('hidden');
        }
    }

    window.addEventListener('scroll', updateHeaderOnScroll);
    window.addEventListener('resize', checkMobileView);
});