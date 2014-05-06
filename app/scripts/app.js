'use strict';

angular.module('portfolio', [
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'portfolio.filters',
    'portfolio.services',
    'portfolio.directives',
    'portfolio.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/landing.html', controller: 'LandingController' });
    $routeProvider.when('/soylib', { templateUrl: 'views/soylib.html', controller: 'LandingController' });
    $routeProvider.when('/nodechat', { templateUrl: 'views/nodechat.html', controller: 'LandingController' });
    $routeProvider.when('/rook', { templateUrl: 'views/rook.html', controller: 'LandingController' });
    $routeProvider.when('/dashboard', { templateUrl: 'views/dashboard.html', controller: 'LandingController' });
    $routeProvider.when('/theremin', { templateUrl: 'views/theremin.html', controller: 'LandingController' });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);
