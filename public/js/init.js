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
        $('textarea#textarea1').characterCounter();
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15
        });
        $('select').material_select();
        $('.carousel.carousel-slider').carousel({ full_width: true });
    });
})(jQuery);
