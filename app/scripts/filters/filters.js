/// <reference path='../definitions/references.d.ts' />

//'use strict';

angular.module('portfolio.filters').
filter('interpolate', ['version', function (version) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    };
}]);
