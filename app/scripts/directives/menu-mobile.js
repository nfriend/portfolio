'use strict';

angular.module('portfolio.directives').
    directive('menuMobile', [function () {
        return {
            templateUrl: 'views/menu-mobile.html',
            controller: 'MenuController'
        };
    }]);
