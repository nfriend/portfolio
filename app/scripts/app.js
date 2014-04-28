'use strict';

angular.module('portfolio', [
    'ngRoute',
    'portfolio.filters',
    'portfolio.services',
    'portfolio.directives',
    'portfolio.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/main.html', controller: 'MainController' });
    $routeProvider.when('/view2', { templateUrl: 'views/view2.html', controller: 'MyController2' });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);
