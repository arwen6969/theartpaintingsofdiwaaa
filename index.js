            // Get elements by their IDs
            const contactSection = document.getElementById('contact');
            const mainContent = document.getElementById('mainContent');
            const aboutSection = document.querySelector('.about-us'); // Select the About Us section
            const contactLink = document.getElementById('contactLink');
            const aboutLink = document.getElementById('aboutLink'); // Get the About Us link
            const homeLink = document.getElementById('homeLink');

            // When "CONTACT" is clicked, show contact section and hide main content
            contactLink.addEventListener('click', function() {
                contactSection.style.display = 'flex'; // Show contact section
                mainContent.style.display = 'none'; // Hide main content 
                aboutSection.style.display = 'none'; // Hide About Us section
            });

            // When "ABOUT US!" is clicked, show About Us section and hide main content
            aboutLink.addEventListener('click', function() {
                aboutSection.style.display = 'flex'; // Show About Us section
                mainContent.style.display = 'none'; // Hide main content
                contactSection.style.display = 'none'; // Hide contact section
            });

            // When "HOME" is clicked, show main content and hide other sections
            homeLink.addEventListener('click', function() {
                contactSection.style.display = 'none'; // Hide contact section
                mainContent.style.display = 'block'; // Show main content
                aboutSection.style.display = 'none'; // Hide About Us section
            });