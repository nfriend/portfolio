/// <reference path='../definitions/references.d.ts' />

//'use strict';

angular.module('portfolio.controllers').
    controller('MenuController', ['$scope', '$rootScope', '$route', '$location', function ($scope, $rootScope, $route, $location) {
        $scope.projects = [
            { name: 'Home', page: 'home' },
            { name: 'Inspirograph', page: 'inspirograph' },
            { name: 'SoyLib', page: 'soylib' },
            { name: 'NodeChat', page: 'nodechat' },
            { name: 'Rook', page: 'rook' },
            { name: 'PSI Dashboard', page: 'dashboard' },
            { name: 'Theremin', page: 'theremin' }
        ];

        $scope.$location = $location;
        $scope.$route = $route;

        $rootScope.sidePanelIsOpen = false;

        $rootScope.openSidePanel = function () {
            $rootScope.sidePanelIsOpen = true;
        }

        $rootScope.closeSidePanel = function () {
            $rootScope.sidePanelIsOpen = false;
        }

        $rootScope.toggleSidePanel = function () {
            $rootScope.sidePanelIsOpen = !$rootScope.sidePanelIsOpen;
        }
    }]);