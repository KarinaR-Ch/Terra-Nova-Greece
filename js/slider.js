// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    initSliders();
    initFlipCards();
    initIntersectionObserver();
});

// Flip cards functionality
function initFlipCards() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('flipped'));
    });
}

// Intersection Observer for animations
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
}

// Slider functionality for each section
function initSliders() {
    document.querySelectorAll('.section-slider').forEach(section => {
        if ((section.id === 'home' || section.id === 'residence') && window.innerWidth <= 768) {
            return;
        }
        
        const track = section.querySelector('.section-track');
        const slides = section.querySelectorAll('.section-slide');
        const leftBtn = section.querySelector('.nav-btn.left');
        const rightBtn = section.querySelector('.nav-btn.right');
        const dotsContainer = section.querySelector('.dots');
        
        if (!track || !leftBtn || !rightBtn || !dotsContainer) return;
        
        let index = 0;

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                index = i;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.dot');
        
        function updateSlider() {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
        }
        
        leftBtn.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            updateSlider();
        });
        
        rightBtn.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            updateSlider();
        });

        // Add swipe functionality for destinations on mobile
        if (section.id === 'destinations' && window.innerWidth <= 768) {
            initSwipe(section, leftBtn, rightBtn);
        }
    });
}

// Swipe functionality for mobile
function initSwipe(section, leftBtn, rightBtn) {
    let startX = 0;
    let endX = 0;

    section.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, false);

    section.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    }, false);

    section.addEventListener('touchend', () => {
        if (startX - endX > 50) {
            rightBtn.click();
        } else if (endX - startX > 50) {
            leftBtn.click();
        }
    }, false);
}