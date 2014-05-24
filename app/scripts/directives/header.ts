/// <reference path='../definitions/references.d.ts' />

'use strict';

angular.module('portfolio.directives').
    directive('header', [function () {
        return {
            templateUrl: 'views/header.html',
            scope: {
                title: '@',
                subtitle: '@'
            },
            compile: function (element, attrs) {
                if (!attrs.title) {
                    attrs.title = 'Portfolio:';
                }
            }
        };
    }]);
