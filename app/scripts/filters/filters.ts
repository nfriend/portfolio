/// <reference path='../definitions/references.d.ts' />

'use strict';

angular.module('portfolio.filters').
filter('interpolate', ['version', (version) => {
    return (text) => {
        return String(text).replace(/\%VERSION\%/mg, version);
    };
}]);
