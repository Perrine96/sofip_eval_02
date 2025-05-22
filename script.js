// PAGE GALERIE 
document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.nav-button.next');
    const prevButton = document.querySelector('.nav-button.prev');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth; 

    // Création des petits points
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => moveToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(document.querySelectorAll('.dot'));

    // Fonction pour mettre à jour la position du carousel
    function updateCarouselPosition() {
        // Calcul de la position du carousel
        const offset = -currentIndex * slideWidth;
        carouselTrack.style.transform = `translateX(${offset}px)`;

        // Update des classes actives pour les slides
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update des classes actives pour les points
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Fonction pour aller à une slide spécifique
    function moveToSlide(index) {
        currentIndex = index;
        updateCarouselPosition();
    }

    // Next button
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarouselPosition();
    });

    // Previous button
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarouselPosition();
    });

    // Fenêtre redimensionnée
    window.addEventListener('resize', () => {
        slideWidth = slides[0].offsetWidth; 
        updateCarouselPosition(); 
    });

    updateCarouselPosition();
});