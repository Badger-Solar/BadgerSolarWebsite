document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");

    let index = 0;

    function updateCarousel() {
        const offset = -index * 100 + "%";
        track.style.transform = "translateX(" + offset + ")";
    }

    nextButton.addEventListener("click", function () {
        if (index < 2) { 
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        if (index > 0) { 
            index--;
        } else {
            index = 2;
        }
        updateCarousel();
    });

    // Optional: Swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].screenX;
    });

    track.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            nextButton.click();
        } else if (touchEndX - touchStartX > 50) {
            prevButton.click();
        }
    });
});