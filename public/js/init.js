var mainApp = angular.module('mainApp', ['ngRoute']);
mainApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
            templateUrl: '../pages/home.html'
        })
        .when('/store-setup', {
            templateUrl: '../pages/store-setup.html'
        })
        .when('/contact', {
            templateUrl: '../pages/contact.html'
        })
        .when('/data-entry', {
            templateUrl: '../pages/data-entry.html'
        })
        .when('/graphic-services', {
            templateUrl: '../pages/graphic-services.html'
        })
        .when('/small-tasks', {
            templateUrl: '../pages/small-tasks.html'
        })
        .when('/free-store-setup', {
            templateUrl: '../pages/free-store-setup.html'
        })
        .when('/app-integrations', {
            templateUrl: '../pages/app-integrations.html'
        })
        .when('/hire-va', {
            templateUrl: '../pages/hire-va.html'
        })
        .when('/about-us', {
            templateUrl: '../pages/about-us.html'
        })
        .when('/app-development', {
            templateUrl: '../pages/app-development.html'
        })
        .when('/web-development', {
            templateUrl: '../pages/web-development.html'
        })
        .otherwise({ redirectTo: '/' });
    $locationProvider.baseHref = '/';
    $locationProvider.html5Mode({
        enabled: true,
    });
});

mainApp.controller('mainController', function($scope) {
    $scope.$on('$viewContentLoaded', function() {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.slider').slider({ full_width: true, height: 600 });
        $(document).scroll(function(event) {
            if (event.currentTarget.scrollingElement.scrollTop > 0)
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
        $(document).on('click', 'a', function(event) {
            if (event.currentTarget.getAttribute('href').indexOf('#') == -1)
                return;
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 100
            }, 500);
        });
    });
});
