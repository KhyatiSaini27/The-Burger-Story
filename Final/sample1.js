// script.js
const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
    section.addEventListener('scroll', () => {
        // Add animation effects when scrolling to each section
        section.classList.add('animate');
    });
});

// Add interactive elements, such as hover effects and click events
sections.forEach((section) => {
    section.addEventListener('mouseover', () => {
        // Add hover effect
        section.classList.add('hover');
    });
    section.addEventListener('mouseout', () => {
        // Remove hover effect
        section.classList.remove('hover');
    });
    section.addEventListener('click', () => {
        // Add click event
        alert('You clicked on a section!');
    });
});