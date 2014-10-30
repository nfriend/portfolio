/// <reference path='definitions/references.d.ts' />

//'use strict';

angular.module('portfolio', [
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'portfolio.filters',
    'portfolio.services',
    'portfolio.directives',
    'portfolio.controllers'
]).
    config(['$routeProvider', function ($routeProvider, $s) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'LandingController',
            title: 'Home',
            isMainPage: true
        });
        $routeProvider.when('/soylib', {
            templateUrl: 'views/soylib.html',
            controller: 'LandingController',
            title: 'SoyLib'
        });
        $routeProvider.when('/inspirograph', {
            templateUrl: 'views/inspirograph.html',
            controller: 'LandingController',
            title: 'Inspirograph'
        });
        $routeProvider.when('/nodechat', {
            templateUrl: 'views/nodechat.html',
            controller: 'LandingController',
            title: 'NodeChat'
        });
        $routeProvider.when('/rook', {
            templateUrl: 'views/rook.html',
            controller: 'LandingController',
            title: 'Rook'
        });
        $routeProvider.when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'LandingController',
            title: 'PSI Dashboard'
        });
        $routeProvider.when('/theremin', {
            templateUrl: 'views/theremin.html',
            controller: 'LandingController',
            title: 'Theremin'
        });
        $routeProvider.when('/portfolio', {
            templateUrl: 'views/portfolio.html',
            controller: 'LandingController',
            title: 'Portfolio'
        });
        $routeProvider.when('/locationmanager', {
            templateUrl: 'views/locationmanager.html',
            controller: 'LandingController',
            title: 'Location Manager'
        });

        $routeProvider.when('/:s', {
            redirectTo: '/home'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }])
.run(['$rootScope', '$location', 's', function ($rootScope, $location, s) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if ($location.search()['s']) {
            $rootScope.s = s($location.search()['s']);
            $location.search('s', null);
        }
    });
}]);
