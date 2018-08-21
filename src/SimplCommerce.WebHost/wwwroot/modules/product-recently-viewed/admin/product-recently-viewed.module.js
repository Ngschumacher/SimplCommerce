/*global angular*/
(function () {
    'use strict';

    angular.module('simplAdmin.recentlyViewed', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('widget-recently-viewed-create', {
                    url: '/widget-recently-viewed/create',
                    templateUrl: 'modules/product-recently-viewed/admin/recently-viewed-widget/recently-viewed-widget-form.html',
                    controller: 'RecentlyViewedWidgetFormCtrl as vm'
                })
                .state('widget-recently-viewed-edit', {
                    url: '/widget-recently-viewed/edit/:id',
                    templateUrl: 'modules/product-recently-viewed/admin/recently-viewed-widget/recently-viewed-widget-form.html',
                    controller: 'RecentlyViewedWidgetFormCtrl as vm'
                });
        }]);
})();