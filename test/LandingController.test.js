/// <reference path='../app/scripts/definitions/references.d.ts' />

'use strict';

describe('LandingController.js Tests', () => {
    beforeEach(module('portfolio.controllers'));
        
    it('Tests the functionality expressed in LandingController.js', inject(($controller) => {
        var $scope: any = {};
        var landingController = $controller('LandingController', {
            $scope: $scope
        });

        expect($scope.something).toBe('sofisodifjsdf');
    }));
});