/// <reference path='../definitions/references.d.ts' />

//'use strict';

angular.module('portfolio.directives').
    directive('ie7Warning', [function () {
        return {
            templateUrl: 'views/ie7-warning.html'
        };
    }]);
