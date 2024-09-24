// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Toggle mobile nav menu
document.getElementById("nav-toggler").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("nav-links").classList.toggle("active");

    // Toggle the brand name visibility based on menu state
    const brandName = document.querySelector('.brand-name');
    if (this.classList.contains('active')) {
        brandName.style.display = 'none';
    } else {
        brandName.style.display = 'inline-block';
    }
});

// Close the mobile nav menu when clicking outside of it
document.addEventListener('click', function(event) {
    const navToggler = document.getElementById('nav-toggler');
    const navLinks = document.getElementById('nav-links');
    const brandName = document.querySelector('.brand-name');
    const isClickInsideNav = navLinks.contains(event.target) || navToggler.contains(event.target);

    if (!isClickInsideNav && navToggler.classList.contains('active')) {
        navToggler.classList.remove('active');
        navLinks.classList.remove('active');
        brandName.style.display = 'inline-block'; // Show the brand name again
    }
});


// About Us Parallax Scroll Section
document.addEventListener('DOMContentLoaded', function() {
    const parallaxSection = document.querySelector('.about-parallax');
    const sectionHeight = parallaxSection.offsetHeight;

    // Check if device is mobile or tablet (iOS/Android)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    window.addEventListener('scroll', function() {
        const sectionTop = parallaxSection.getBoundingClientRect().top;

        // Apply scroll-based parallax effect only when section is in view
        if (sectionTop < window.innerHeight && sectionTop > -sectionHeight) {
            const scrollPercent = (window.innerHeight - sectionTop) / (window.innerHeight + sectionHeight);

            // Adjust background position for parallax effect
            let backgroundPositionY;
            if (isMobile) {
                // Manually update background position for mobile (no background-attachment: fixed)
                backgroundPositionY = 50 - (scrollPercent * 50); // 50% to -50% for parallax range
            } else {
                // For desktop with background-attachment: fixed
                backgroundPositionY = 100 - (scrollPercent * 100);
            }

            parallaxSection.style.backgroundPositionY = `${backgroundPositionY}%`;
        } else {
            parallaxSection.style.backgroundPositionY = '100%'; // Reset position when out of view
        }
    });
});


// Handle the image click and show it in the modal
document.querySelectorAll('.image-wrapper').forEach(item => {
    item.addEventListener('click', function() {
        const imageUrl = this.getAttribute('data-image-src');
        document.getElementById('modalImage').src = imageUrl;
    });
});


// Add event listener for the "About US" link
document.querySelector('.nav-item[href="#about"]').addEventListener('click', function(e) {
    e.preventDefault();

    // Get the target section's position (scroll to the end of the Layered Cards section)
    const layeredCardsSection = document.querySelector('.card-container');
    const offset = 50; // Adjust this value based on the navbar height

    // Scroll smoothly to the section with an offset
    const layeredCardsPosition = layeredCardsSection.getBoundingClientRect().bottom + window.scrollY - offset;

    window.scrollTo({
        top: layeredCardsPosition,
        behavior: 'smooth'
    });
});