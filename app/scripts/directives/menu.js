'use strict';

angular.module('portfolio.directives').
    directive('menu', [function () {
        return {
            templateUrl: 'views/menu.html',
            controller: 'MenuController'
        };
    }]);
