/// <reference path='../definitions/references.d.ts' />

'use strict';

angular.module('portfolio.directives').
    directive('menuMobile', [() => {
        return {
            templateUrl: 'views/menu-mobile.html',
            controller: 'MenuController'
        };
    }]);
