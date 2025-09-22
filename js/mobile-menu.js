// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
});

function initMobileMenu() {
    const menuIcon = document.querySelector('.header__menu-icon');
    const mobileMenu = document.querySelector('.header__links-mobile');
    const closeIcon = document.querySelector('.close-icon');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeIcon) {
        closeIcon.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.header__link-mobile a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}