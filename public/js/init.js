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
            templateUrl: '../pages/small-tasks.html',
            controller: 'smalltasksController'
        })
        .when('/free-store-setup', {
            templateUrl: '../pages/free-store-setup.html'
        })
        .when('/app-integrations', {
            templateUrl: '../pages/app-integrations.html'
        })
        .when('/hire-va', {
            templateUrl: '../pages/hire-va.html',
            controller: 'pricingController'
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
        .when('/404', {
            templateUrl: '../pages/404.html'
        })
        .otherwise({ redirectTo: '/404' });
    $locationProvider.baseHref = '/';
    $locationProvider.html5Mode({
        enabled: true,
    });
});
mainApp.controller('contactController', function($scope) {
    var branches = [
        ['Hyderabad', 17.491824, 78.393659, 1],
        ['NewYork', 41.127458, -73.945372]
    ];

    $scope.initMap = function() {
        $scope.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: { lat: 25.491824, lng: 78.393659 }
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
mainApp.controller('pricingController', function($scope) {
    var monthlyPlans = [{
        "planName": "Green",
        "planColor": ["green","lighten-2"],
        "headerColor":["green","lighten-4"],
        "price": 349,
        "details": [
            "48 hours", "Max 15 hours a week", "Web Designing – 6 hours", "Graphic designing – 6 hours", "Customer support – 8 hours", "Rest can be used as per your requirements"
        ],
        "addons": ["$50 for 5 hours", "$90 for 10 hours", "$150 for 18 hours"]
    }, {
        "planName": "Orange",
        "planColor": ["orange","darken-1"],
        "headerColor": ["orange","lighten-4"],
        "price": 649,
        "details": [
            "100 hours", "Max 32 hours a week", "Web Designing – 13 hours", "Graphic designing – 13 hours", "Customer support – 13 hours", "Rest can be used as per your requirements"
        ],
        "addons": ["$45 for 5 hours", "$85 for 10 hours", "$145 for 18 hours"]
    }, {
        "planName": "Blue",
        "planColor": ["light-blue","accent-3"],
        "headerColor": ["light-blue","lighten-5"],
        "price": 949,
        "details": [
            "160 hours", "Max 48 hours a week", "Web Designing – 22 hours", "Graphic designing – 22 hours", "Customer support – 22 hours", "Rest can be used as per your requirements"
        ],
        "addons": ["$42 for 5 hours", "$80 for 10 hours", "$140 for 18 hours"]
    }]
    var quarterlyPlans = [{
        "planName": "Green",
        "planColor": ["green","lighten-2"],
        "headerColor":["green","lighten-4"],
        "price": 1299,
        "details": [
            "48 hours", "Max 15 hours a week", "Web Designing – 6 hours", "Graphic designing – 6 hours", "Customer support – 8 hours", "Rest can be used as per your requirements"
        ],
        "addons": ["$50 for 5 hours", "$90 for 10 hours", "$150 for 18 hours"]
    }, {
        "planName": "Orange",
        "planColor": ["orange","darken-1"],
        "headerColor": ["orange","lighten-4"],
        "price": 6249,
        "details": [
            "100 hours", "Max 32 hours a week", "Web Designing – 13 hours", "Graphic designing – 13 hours", "Customer support – 13 hours", "Rest can be used as per your requirements"
        ],
        "addons": ["$45 for 5 hours", "$85 for 10 hours", "$145 for 18 hours"]
    }, {
        "planName": "Blue",
        "planColor": ["light-blue","accent-3"],
        "headerColor": ["light-blue","lighten-5"],
        "price": 9949,
        "details": [
            "160 hours", "Max 48 hours a week", "Web Designing – 22 hours", "Graphic designing – 22 hours", "Customer support – 22 hours", "Rest can be used as per your requirements"
        ],
        "addons": ["$42 for 5 hours", "$80 for 10 hours", "$140 for 18 hours"]
    }]
    $scope.selected = 0;
    $scope.selectMode = function(val) {
        $scope.selected = val;
        if (val == 0)
            $scope.plans = monthlyPlans;
        else
            $scope.plans = quarterlyPlans;
    }
    $scope.plans = monthlyPlans;
});
mainApp.controller('smalltasksController', function($scope) {
    var monthlyPlans = [{
        "planName": "Green",
        "planColor": ["green","lighten-2"],
        "headerColor":["green","lighten-4"],
        "price": 349,
        "details": [
            "48 hours", "Max 15 hours a week", "Web Designing – 6 hours", "Graphic designing – 6 hours", "Customer support – 8 hours", "Rest can be used as per your requirements"
        ]
    }, {
        "planName": "Orange",
        "planColor": ["orange","darken-1"],
        "headerColor": ["orange","lighten-4"],
        "price": 649,
        "details": [
            "100 hours", "Max 32 hours a week", "Web Designing – 13 hours", "Graphic designing – 13 hours", "Customer support – 13 hours", "Rest can be used as per your requirements"
        ]
    }, {
        "planName": "Blue",
        "planColor": ["light-blue","accent-3"],
        "headerColor": ["light-blue","lighten-5"],
        "price": 949,
        "details": [
            "160 hours", "Max 48 hours a week", "Web Designing – 22 hours", "Graphic designing – 22 hours", "Customer support – 22 hours", "Rest can be used as per your requirements"
        ]
    }]
    var quarterlyPlans = [{
        "planName": "Green",
        "planColor": ["green","lighten-2"],
        "headerColor":["green","lighten-4"],
        "price": 1299,
        "details": [
            "48 hours", "Max 15 hours a week", "Web Designing – 6 hours", "Graphic designing – 6 hours", "Customer support – 8 hours", "Rest can be used as per your requirements"
        ]
    }, {
        "planName": "Orange",
        "planColor": ["orange","darken-1"],
        "headerColor": ["orange","lighten-4"],
        "price": 6249,
        "details": [
            "100 hours", "Max 32 hours a week", "Web Designing – 13 hours", "Graphic designing – 13 hours", "Customer support – 13 hours", "Rest can be used as per your requirements"
        ]
    }, {
        "planName": "Blue",
        "planColor": ["light-blue","accent-3"],
        "headerColor": ["light-blue","lighten-5"],
        "price": 9949,
        "details": [
            "160 hours", "Max 48 hours a week", "Web Designing – 22 hours", "Graphic designing – 22 hours", "Customer support – 22 hours", "Rest can be used as per your requirements"
        ]
    }]
    $scope.selected = 0;
    $scope.selectMode = function(val) {
        $scope.selected = val;
        if (val == 0)
            $scope.plans = monthlyPlans;
        else
            $scope.plans = quarterlyPlans;
    }
    $scope.plans = monthlyPlans;
});
mainApp.controller('mainController', function($scope) {
    $scope.$on('$viewContentLoaded', function() {
        $('.button-collapse').sideNav({
            closeOnClick: true
        });
        $(window).bind("mousewheel", function() {
            $("html, body").stop();
        });
        $('.parallax').parallax();
        $('.slider').slider({ full_width: true });
        $(document).scroll(function(event) {
            var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            if (scrollTop > 0) {
                $("#page-header").addClass('fixed');
                if (scrollTop > 100)
                    $('.scroll-btn').addClass('show');
            } else {
                $("#page-header").removeClass('fixed');
                $('.scroll-btn').removeClass('show');
            }
        });
        $('textarea#textarea1').characterCounter();
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15,
            formatSubmit: 'mm/dd/yyyy',
            min: true,
            onClose: function() {
                $(document.activeElement).blur()
            },
            onSet: function(arg) {
                if ('select' in arg) { //prevent closing on selecting month/year
                    this.close();
                }
            }
        });
        $('.scroll-btn').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        })
        $('select').material_select();
        $(".form-error").slideUp();
        $('.carousel.carousel-slider').carousel({ full_width: true});
        $('body').on('click','a[href*=#contactForm]',function() {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 64
                }, 500);
                return false;
            }
        });
        $('a[href*=#services]').click(function() {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 64
                }, 500);
                return false;
            }
        });
        $('li.main-menu').hover(function() {
            $(this).children('ul.sub-menu').show();
        }, function() {
            $(this).children("ul.sub-menu").hide();
        });
        $('ul.sub-menu').click(function(event) {
            $(this).hide();
        });
        $(".contact-form").submit(function(e) {
            e.preventDefault();
            var $form = $(this);
            var action = $form.attr("action");
            var post_data = new FormData(this);
            $.ajax({
                url: action,
                type: "POST",
                data: post_data,
                processData: false,
                contentType: false,
                success: function(response) {
                    if (response.result == true) {
                        Materialize.toast(response.message, 5000);
                        $(".contact-form").trigger('reset');
                        $form.find(".form-error").slideUp();
                    } else {
                        $form.find(".form-error").slideDown();
                        var html = "<ul><li>" + response.errors.join("</li><li>") + "</li></ul>";
                        $form.find(".form-error .error-msg").html(html);
                    }
                },
                dataType: "json"
            });
            //return false;
        });
        $('body').on('click','.expand-cont',function(e) {
            $(this).siblings('.sub-cont').slideToggle();
            $(this).find(".arrow-up, .arrow-down").toggle();
        });
    });
});
