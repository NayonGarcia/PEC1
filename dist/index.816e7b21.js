document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slideCount = document.querySelectorAll(".slide").length;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;
    function showSlide(index) {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}vw)`;
    }
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        showSlide(currentIndex);
    }
    // Botones de control
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
    // Cambio automático cada 5 segundos
    setInterval(nextSlide, 5000);
    // Mostrar la primera slide
    showSlide(currentIndex);
});

//# sourceMappingURL=index.816e7b21.js.map
