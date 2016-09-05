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
        $(document).click(function(event) {
            $('.sub-menu').hide();
        })
        $('.main-menu').click(function(event) {
            event.stopImmediatePropagation();
            $('.sub-menu').hide();
            var elem = event.currentTarget.nextElementSibling;
            $(elem).show();
        })
        $('textarea#textarea1').characterCounter();
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15
        });
        $('select').material_select();
        $('.carousel.carousel-slider').carousel({ full_width: true });
        //smooth scroll
        $(document).on('click', 'a', function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 100
            }, 500);
        });
    });
})(jQuery);
