// JavaScript for Interactive Portfolio

// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});

// Contact Form Submission (Mock Example)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('[name="name"]');
    const email = document.querySelector('[name="email"]');
    const message = document.querySelector('[name="message"]');

    if (name.value && email.value && message.value) {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all the fields.');
    }
});

// JavaScript for Certificate Slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.certificate-slider');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    // Set card width and scroll step
    const cardWidth = 320; // Adjust based on your card dimensions
    let currentPosition = 0;

    // Function to handle scrolling
    const scrollSlider = (direction) => {
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        if (direction === 'left') {
            currentPosition = Math.max(currentPosition - cardWidth, 0);
        } else if (direction === 'right') {
            currentPosition = Math.min(currentPosition + cardWidth, maxScroll);
        }

        slider.style.transform = `translateX(-${currentPosition}px)`;
    };

    // Arrow click event listeners
    leftArrow.addEventListener('click', () => scrollSlider('left'));
    rightArrow.addEventListener('click', () => scrollSlider('right'));

    // Touch and drag functionality
    let isDragging = false;
    let startPos = 0;
    let prevTranslate = 0;
    let currentTranslate = 0;

    const dragStart = (e) => {
        isDragging = true;
        startPos = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        slider.style.cursor = 'grabbing';
    };

    const drag = (e) => {
        if (!isDragging) return;
        const currentPosition = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        const movement = currentPosition - startPos;
        currentTranslate = prevTranslate + movement;

        // Limit scrolling
        const maxScroll = -(slider.scrollWidth - slider.clientWidth);
        if (currentTranslate > 0) currentTranslate = 0;
        if (currentTranslate < maxScroll) currentTranslate = maxScroll;

        slider.style.transform = `translateX(${currentTranslate}px)`;
    };

    const dragEnd = () => {
        isDragging = false;
        prevTranslate = currentTranslate;
        slider.style.cursor = 'grab';
    };

    // Add event listeners for drag functionality
    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('touchstart', dragStart);
    slider.addEventListener('mousemove', drag);
    slider.addEventListener('touchmove', drag);
    slider.addEventListener('mouseup', dragEnd);
    slider.addEventListener('mouseleave', dragEnd);
    slider.addEventListener('touchend', dragEnd);
});

// Projects Section (Placeholder for other functionality)
const leftArrowProjects = document.querySelector('.left-arrow');
const rightArrowProjects = document.querySelector('.right-arrow');
const projectSlider = document.querySelector('.project-slider');

leftArrowProjects?.addEventListener('click', () => {
    projectSlider.scrollBy({
        left: -340,
        behavior: 'smooth',
    });
});

rightArrowProjects?.addEventListener('click', () => {
    projectSlider.scrollBy({
        left: 340,
        behavior: 'smooth',
    });
});

// Typing Effect for Introduction
document.addEventListener('DOMContentLoaded', function () {
    const typedText = "Hello, I am Anas.";
    let index = 0;
    const h1Element = document.getElementById('typed-text');

    function typeText() {
        if (index < typedText.length) {
            h1Element.textContent += typedText.charAt(index);
            index++;
            setTimeout(typeText, 150);
        }
    }

    typeText();
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.3 }); // Trigger when 10% of the section is visible

    sections.forEach(section => observer.observe(section));
});