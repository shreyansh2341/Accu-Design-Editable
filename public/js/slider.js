let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider2 = document.querySelector('.slider2');
let sliderList = slider2.querySelector('.slider2 .list1');
let thumbnail = document.querySelector('.slider2 .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item2');

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next');
}

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev');
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item2');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item2');
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider2.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider2.classList.add('prev');
    }

    slider2.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider2.classList.remove('next');
        } else {
            slider2.classList.remove('prev');
        }
    }, {once: true}); // Remove the event listener after it's triggered once
}

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

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      moveSlider('next');
    }, 4000); // Change the interval (3000ms = 3 seconds) as needed
  }
  
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }
  
  
  startAutoScroll(); // Start auto-scrolling initially
  
  // Optional: Stop auto-scrolling on user interaction (e.g., hover)
  slider2.addEventListener('mouseenter', stopAutoScroll);
  slider2.addEventListener('mouseleave', startAutoScroll);