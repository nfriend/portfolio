/// <reference path='../app/scripts/definitions/references.d.ts' />

'use strict';

describe('MenuController.js Tests', () => {
    var $scope, $location, $rootScope, controller;

    beforeEach(module('portfolio.controllers'));
        
    it('Tests the functionality expressed in MenuController.js', inject(($controller) => {
        var $scope: IMenuControllerScope = {
            projects: null,
            $location: null
        };
        var $rootScope: any = {};
        var $location: any = {};

        var menuController = $controller('MenuController', {
            $scope: $scope,
            $rootScope: $rootScope,
            $location: $location
        });

        expect($scope.$location).toBe($location);
        expect($scope.projects.length).toBe(6);
        expect($rootScope.sidePanelIsOpen).toBeDefined;

        $rootScope.sidePanelIsOpen = false;
        $rootScope.openSidePanel();
        expect($rootScope.sidePanelIsOpen).toBe(true);

        $rootScope.closeSidePanel();
        expect($rootScope.sidePanelIsOpen).toBe(false);

        $rootScope.toggleSidePanel();
        expect($rootScope.sidePanelIsOpen).toBe(true);

        $rootScope.toggleSidePanel();
        expect($rootScope.sidePanelIsOpen).toBe(false);

    }));
});