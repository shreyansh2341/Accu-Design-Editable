let currentIndex = 0;
const slider1 = document.getElementById('slider1');
const images = document.querySelectorAll('.slider-item1');
const totalImages = images.length;
const imageWidth = images[0].offsetWidth + 20; // Include gap

// Duplicate images for infinite loop
slider1.innerHTML += slider1.innerHTML;
const allImages = document.querySelectorAll('.slider-item1');

const updateSliderPosition = () => {
    slider1.style.transition = "transform 0.5s ease-in-out";
    slider1.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
};

const nextSlide = () => {
    if (currentIndex >= totalImages) {
        slider1.style.transition = "none";
        currentIndex = 0;
        slider1.style.transform = `translateX(0px)`;

        setTimeout(() => {
            slider1.style.transition = "transform 0.5s ease-in-out";
            currentIndex++;
            updateSliderPosition();
        }, 50);
    } else {
        currentIndex++;
        updateSliderPosition();
    }
};

const prevSlide = () => {
    if (currentIndex <= 0) {
        slider1.style.transition = "none";
        currentIndex = totalImages;
        slider1.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

        setTimeout(() => {
            slider1.style.transition = "transform 0.5s ease-in-out";
            currentIndex--;
            updateSliderPosition();
        }, 50);
    } else {
        currentIndex--;
        updateSliderPosition();
    }
};

// Auto-scroll function
let autoScrollInterval = setInterval(nextSlide, 3000);

// Stop auto-scroll when hovering
slider1.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
});

slider1.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(nextSlide, 3000);
});

// Manual navigation buttons
document.getElementById('prevBtn1').addEventListener('click', prevSlide);
document.getElementById('nextBtn1').addEventListener('click', nextSlide);

// Ensure the slider starts at the correct position
updateSliderPosition();