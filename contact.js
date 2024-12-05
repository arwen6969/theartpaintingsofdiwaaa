const aboutSection = document.querySelector('.about-us');
const contactSection = document.getElementById('contact');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');

// Show "Contact" section by default and hide "About Us"
aboutSection.style.display = 'none';
contactSection.style.display = 'flex';

// Add event listeners for navigation
aboutLink.addEventListener('click', () => {
    aboutSection.style.display = 'flex';
    contactSection.style.display = 'none';
});

contactLink.addEventListener('click', () => {
    aboutSection.style.display = 'none';
    contactSection.style.display = 'flex';
});