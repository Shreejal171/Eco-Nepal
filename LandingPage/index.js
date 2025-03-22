$(document).ready(function() {
    // Hamburger menu toggle
    $('.hamburger').click(function() {
        $('.nav-menu').slideToggle(500);
    });

    // Smooth scrolling for navigation links
    $('.nav-link').click(function(e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 70
        }, 800);
        // Close mobile menu if open
        if ($(window).width() < 768) {
            $('.nav-menu').slideUp(500);
        }
    });

    // Carousel functionality
    let currentSlide = 0;
    const slides = $('.carousel-slides .slide');
    const totalSlides = slides.length;

    // Show initial slide
    updateCarousel();

    // Handle dot navigation
    $('.carousel-dot').click(function() {
        currentSlide = $(this).data('index');
        updateCarousel();
    });

    // Update carousel display
    function updateCarousel() {
        // Update slide position
        $('.carousel-slides').css('transform', `translateX(-${currentSlide * 100}%)`);

        // Update active dot
        $('.carousel-dot').removeClass('active');
        $(`.carousel-dot[data-index="${currentSlide}"]`).addClass('active');
    }

    // Auto advance carousel every 5 seconds
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 5000);

    // Start trip button alert
    $('.start-trip').click(function() {
        alert('Trip started! Enjoy your sustainable journey.');
    });

    // Update navigation menu on window resize
    $(window).resize(function() {
        if ($(window).width() >= 768) {
            $('.nav-menu').css('display', 'flex');
        } else {
            $('.nav-menu').css('display', 'none');
        }
    });
});