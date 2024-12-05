const aboutSection = document.querySelector('.about-us');
const contactSection = document.getElementById('contact');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');

// Show "About Us" by default
aboutSection.style.display = 'flex';

// Add event listeners
homeLink.addEventListener('click', () => {
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
});

aboutLink.addEventListener('click', () => {
    aboutSection.style.display = 'flex';
    contactSection.style.display = 'none';
});

contactLink.addEventListener('click', () => {
    aboutSection.style.display = 'none';
    contactSection.style.display = 'block';
});