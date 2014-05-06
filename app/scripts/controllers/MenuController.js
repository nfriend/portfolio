'use strict';

angular.module('portfolio.controllers').
    controller('MenuController', ['$scope', function ($scope) {
        $scope.projects = [
            { name: 'SoyLib', page: 'soylib' },
            { name: 'NodeChat', page: 'nodechat' },
            { name: 'Rook', page: 'rook' },
            { name: 'PSI Dashboard', page: 'dashboard' },
            { name: 'Theremin', page: 'theremin' }
        ];

        $scope.alert = function () {
            alert('hello');
        }
    }]);