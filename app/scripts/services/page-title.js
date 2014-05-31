/// <reference path='../definitions/references.d.ts' />

'use strict';

//not currently used
angular.module('portfolio.services')
    .factory('', ['$rootScope', '$location', '$route', function ($rootScope, $location, $route) {
        var pageTitleInstance = {
            title: 'Home',
            isMainPage: true
        };

        $rootScope.$on('$locationChangeSuccess', function () {
            pageTitleInstance.title = $route.current.title;
            pageTitleInstance.isMainPage = $route.current.isMainPage;
        });

        return pageTitleInstance;
    }]);
