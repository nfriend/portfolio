/// <reference path='../definitions/references.d.ts' />

'use strict';

interface IMenuControllerScope {
    projects: Array<IProject>;
    $location: any
}

interface IProject {
    name: string;
    page: string;
}

angular.module('portfolio.controllers').
    controller('MenuController', ['$scope', '$rootScope', '$location', ($scope: IMenuControllerScope, $rootScope, $location: ng.ILocationProvider) => {
        $scope.projects = [
            { name: 'Home', page: 'home' },
            { name: 'SoyLib', page: 'soylib' },
            { name: 'NodeChat', page: 'nodechat' },
            { name: 'Rook', page: 'rook' },
            { name: 'PSI Dashboard', page: 'dashboard' },
            { name: 'Theremin', page: 'theremin' }
        ];

        $scope.$location = $location;

        $rootScope.sidePanelIsOpen = false;

        $rootScope.openSidePanel = () => {
            $rootScope.sidePanelIsOpen = true;
        }

        $rootScope.closeSidePanel = () => {
            $rootScope.sidePanelIsOpen = false;
        }

        $rootScope.toggleSidePanel = () => {
            $rootScope.sidePanelIsOpen = !$rootScope.sidePanelIsOpen;
        }
    }]);