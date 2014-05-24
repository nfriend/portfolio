/// <reference path='../definitions/references.d.ts' />

'use strict';

angular.module('portfolio.directives').
    directive('menu', [() => {
        return {
            templateUrl: 'views/menu.html',
            controller: 'MenuController'
        };
    }]);
