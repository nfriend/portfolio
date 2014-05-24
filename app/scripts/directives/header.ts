/// <reference path='../definitions/references.d.ts' />

'use strict';

angular.module('portfolio.directives').
    directive('header', [() => {

        return {
            templateUrl: 'views/header.html',
            scope: {
                title: '@',
                subtitle: '@'
            },
            compile: (element, attrs) => {
                if (!attrs.title) {
                    attrs.title = 'Portfolio:';
                }
            }
        };
    }]);
