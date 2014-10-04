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
    config(['$routeProvider', function($routeProvider) {
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

        $routeProvider.otherwise({ redirectTo: '/home' });
    }]);
