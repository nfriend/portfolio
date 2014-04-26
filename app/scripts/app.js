'use strict';

// Declare app level module which depends on filters, and services
angular.module('portfolio', [
    'ngRoute',
    'portfolio.filters',
    'portfolio.services',
    'portfolio.directives',
    'portfolio.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', { templateUrl: 'views/view1.html', controller: 'MyController1' });
    $routeProvider.when('/view2', { templateUrl: 'views/view2.html', controller: 'MyController2' });
    $routeProvider.otherwise({ redirectTo: '/view1' });
}]);
