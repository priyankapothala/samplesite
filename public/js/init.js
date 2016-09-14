var mainApp = angular.module('mainApp', ['ngRoute']);
mainApp.config(function($routeProvider, $locationProvider, $httpProvider) {
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
mainApp.service('emailService', function($http, $q) {
   $http.defaults.headers.common['x-api-key']='5A557875A2AAF2EAF080C22C1C274886';
    //$http.defaults.headers.common['x-requested-with']=true;
    this.postCall = function(url, data) {
        var tempdata = angular.copy(data);
        var deferred = $q.defer();
        $http.post(url, tempdata).success(function(response) {
            deferred.resolve(response);
        }).error(function(err) {
            deferred.reject(err);
            console.log(err);
        });
        return deferred.promise;
    }
});
mainApp.controller('mainController', function($scope, emailService) {
    $scope.$on('$viewContentLoaded', function() {
        $('.button-collapse').sideNav({
            closeOnClick: true
        });
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
            if (!event.currentTarget.getAttribute('href'))
                return;
            if (event.currentTarget.getAttribute('href').indexOf('#') == -1)
                return;
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });
    });

    $scope.postTicket = function() {
        var data = {
            "alert": true,
            "autorespond": true,
            "source": "API",
            "name": "Angry User",
            "email": "api@osticket.com",
            "phone": "3185558634X123",
            "subject": "Testing API",
            "ip": "123.211.233.122",
            "message": "MESSAGE HERE"
        }
        var data="";
        emailService.postCall('http://www.support.gangez.in/api/tickets.json', data).
        then(function(data) {
            console.log(data);
        }, function(err) {
            console.log(err);
        })
    }
});
