(function($) {
    $(function() {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.slider').slider({ full_width: true, height: 600 });
        $(document).scroll(function(event) {
            if (event.currentTarget.scrollingElement.scrollTop > 64)
                $("#page-header").addClass('fixed');
            else
                $("#page-header").removeClass('fixed');
        });
        $('.carousel.carousel-slider').carousel({ full_width: true });
    });
})(jQuery);
