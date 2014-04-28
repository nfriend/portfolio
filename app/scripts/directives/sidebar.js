'use strict';

angular.module('portfolio.directives').
    directive('sidebar', [function () {
        return {
            templateUrl: 'views/sidebar.html',
            controller: 'SidebarController'
        }
    }]);
