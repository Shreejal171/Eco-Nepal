document.addEventListener('DOMContentLoaded', () => {
    // Start Trip Button Functionality
    const startTripButton = document.querySelector('.start-trip');
    startTripButton.addEventListener('click', () => {
        alert('Trip started! Enjoy your sustainable journey in Pokhara.');
    });
    
    // Activity Filter Buttons
    const activityButtons = document.querySelectorAll('.activity-filters button');
    activityButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            activityButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
        });
    });
    
    // Footer Navigation
    const navLinks = document.querySelectorAll('.footer-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default link behavior for demo
            e.preventDefault();
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
        });
    });
    
    // Add smooth hover effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        // Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const navbarMenu = document.querySelector('.navbar-menu');
        
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNavbar = event.target.closest('.navbar-container');
            
            if (!isClickInsideNavbar && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
        
        // Navigation active state
        const navLinks = document.querySelectorAll('.navbar-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Remove active class from all links
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Close mobile menu when a link is clicked
                if (navbarMenu.classList.contains('active')) {
                    navbarMenu.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            });
        });
        
        // Add background color to navbar on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    });
});