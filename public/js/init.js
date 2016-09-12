var mainApp = angular.module('mainApp', ['ngRoute']);
mainApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
            templateUrl: '../pages/home.html'
        })
        .when('/store-setup', {
            templateUrl: '../pages/store-setup.html'
        })
        .when('/contact', {
            templateUrl: '../pages/contact.html',
            controller: 'contactController'
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
        .when('/about', {
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
mainApp.controller('contactController', function($scope) {
    var branches = [
        ['Hyderabad', 17.491824, 78.393659, 1]
    ];

    $scope.initMap = function() {
        $scope.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: { lat: 17.491824, lng: 78.393659 }
        });
        $scope.setMarkers(map);
    }

    $scope.setMarkers = function(map) {
        for (var i = 0; i < branches.length; i++) {
            var branch = branches[i];
            var marker = new google.maps.Marker({
                position: { lat: branch[1], lng: branch[2] },
                map: $scope.map,
                title: branch[0],
                zIndex: branch[3]
            });
        }
    }
    $scope.initMap();
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
