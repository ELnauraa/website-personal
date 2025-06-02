let currentIndex = 0;
const track = document.getElementById("galleryTrack");
const slides = document.querySelectorAll(".gallery-slide");

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= slides.length) {
        currentIndex = slides.length - 1;
    }

    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}