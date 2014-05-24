/// <reference path='definitions/references.d.ts' />

'use strict';

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
    config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider.when('/home', { templateUrl: 'views/home.html', controller: 'LandingController' });
        $routeProvider.when('/soylib', { templateUrl: 'views/soylib.html', controller: 'LandingController' });
        $routeProvider.when('/nodechat', { templateUrl: 'views/nodechat.html', controller: 'LandingController' });
        $routeProvider.when('/rook', { templateUrl: 'views/rook.html', controller: 'LandingController' });
        $routeProvider.when('/dashboard', { templateUrl: 'views/dashboard.html', controller: 'LandingController' });
        $routeProvider.when('/theremin', { templateUrl: 'views/theremin.html', controller: 'LandingController' });
        $routeProvider.otherwise({ redirectTo: '/home' });
    }]);
