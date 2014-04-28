'use strict';

angular.module('portfolio.controllers').
    controller('SidebarController', ['$scope', function ($scope) {
        $scope.projects = ['SoyLib', 'NodeChat', 'Rook', 'PSI Dashboard', 'Battleship', 'Theremin'];
    }]);