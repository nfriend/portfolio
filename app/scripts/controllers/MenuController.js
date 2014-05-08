'use strict';

angular.module('portfolio.controllers').
    controller('MenuController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.projects = [
            { name: 'Home', page: 'home' },
            { name: 'SoyLib', page: 'soylib' },
            { name: 'NodeChat', page: 'nodechat' },
            { name: 'Rook', page: 'rook' },
            { name: 'PSI Dashboard', page: 'dashboard' },
            { name: 'Theremin', page: 'theremin' }
        ];

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

        $rootScope.alert = function () {
            alert('hello');
        }
    }]);