// Slider functionality for each section
document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.section-slider');
    
    sliders.forEach(section => {
        // Skip home and residence sections in mobile view
        if ((section.id === 'home' || section.id === 'residence') && window.innerWidth <= 768) {
            return;
        }
        
        const track = section.querySelector('.section-track');
        const slides = section.querySelectorAll('.section-slide');
        const leftBtn = section.querySelector('.nav-btn.left');
        const rightBtn = section.querySelector('.nav-btn.right');
        const dotsContainer = section.querySelector('.dots');
        let index = 0;

        if (!track || !leftBtn || !rightBtn || !dotsContainer) return;

        // Create dots for each slide
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

        // Add swipe handling for destinations section on mobile
        if (section.id === 'destinations' && window.innerWidth <= 768) {
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
                    // Swipe left - next slide
                    rightBtn.click();
                } else if (endX - startX > 50) {
                    // Swipe right - previous slide
                    leftBtn.click();
                }
            }, false);
        }
    });
});