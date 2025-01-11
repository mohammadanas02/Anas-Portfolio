// JavaScript for Interactive Portfolio

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission (Mock Example)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Validate form fields
    const name = document.querySelector('[name="name"]');
    const email = document.querySelector('[name="email"]');
    const message = document.querySelector('[name="message"]');

    if (name.value && email.value && message.value) {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset(); // Reset form after submission
    } else {
        alert('Please fill in all the fields.');
    }
});


// JavaScript for the certificate slider
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slider = document.querySelector('.certificate-slider');

// Track the current scroll position
let scrollPosition = 0;

// Scroll step size (adjust as needed)
const scrollStep = 300;

// Function to handle scrolling to the left
leftArrow.addEventListener('click', () => {
    scrollPosition -= scrollStep;
    if (scrollPosition < 0) {
        scrollPosition = 0; // Prevent scrolling past the start
    }
    slider.style.transform = `translateX(-${scrollPosition}px)`;
});

// Function to handle scrolling to the right
rightArrow.addEventListener('click', () => {
    const maxScroll = slider.scrollWidth - slider.offsetWidth;
    scrollPosition += scrollStep;
    if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll; // Prevent scrolling past the end
    }
    slider.style.transform = `translateX(-${scrollPosition}px)`;
});

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const slider = document.querySelector('.certificate-slider');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    // Set the width for scrolling (card width + gap)
    const cardWidth = 320;
    let currentPosition = 0;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    // Function to handle scrolling
    function handleScroll(direction) {
        if (direction === 'left') {
            currentPosition = Math.max(currentPosition - cardWidth, 0);
        } else {
            currentPosition = Math.min(currentPosition + cardWidth, maxScroll);
        }

        slider.style.transform = `translateX(-${currentPosition}px)`;
    }

    // Add click event listeners to arrows
    leftArrow.addEventListener('click', () => handleScroll('left'));
    rightArrow.addEventListener('click', () => handleScroll('right'));

    // Touch and drag functionality
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('touchstart', dragStart);
    slider.addEventListener('mouseup', dragEnd);
    slider.addEventListener('touchend', dragEnd);
    slider.addEventListener('mouseleave', dragEnd);
    slider.addEventListener('mousemove', drag);
    slider.addEventListener('touchmove', drag);

    function dragStart(e) {
        isDragging = true;
        startPos = getPositionX(e);
        currentTranslate = prevTranslate;
        slider.style.cursor = 'grabbing';
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        const currentPosition = getPositionX(e);
        const diff = currentPosition - startPos;
        currentTranslate = prevTranslate + diff;
        
        // Limit scrolling
        if (currentTranslate > 0) currentTranslate = 0;
        if (currentTranslate < -maxScroll) currentTranslate = -maxScroll;
        
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }

    function dragEnd() {
        isDragging = false;
        prevTranslate = currentTranslate;
        slider.style.cursor = 'grab';
    }

    function getPositionX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }
});

document.getElementById('leftArrow').addEventListener('click', function () {
    document.querySelector('.certificate-slider').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

document.getElementById('rightArrow').addEventListener('click', function () {
    document.querySelector('.certificate-slider').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});


/* Projects */
// JavaScript for Project Slider functionality
const leftArrowProjects = document.querySelector('.left-arrow');
const rightArrowProjects = document.querySelector('.right-arrow');
const projectSlider = document.querySelector('.project-slider');

// Handle left arrow click
leftArrowProjects.addEventListener('click', () => {
    projectSlider.scrollBy({
        left: -340, // Adjust this value to match the width of your cards
        behavior: 'smooth',
    });
});

// Handle right arrow click
rightArrowProjects.addEventListener('click', () => {
    projectSlider.scrollBy({
        left: 340, // Adjust this value to match the width of your cards
        behavior: 'smooth',
    });
});

