(function (angular) {
    'use strict';

    angular
        .module('app.breadcrumbs')
        .directive('mccBreadcrumbs', breadcrumbs);

    /* @ngInject */
    function breadcrumbs() {
        return {
            templateUrl: "app/breadcrumbs/breadcrumbs.html",
            controller: BreadcrumbsController,
            controllerAs: 'breadcrumbs',
            restrict: 'E'
        };
    }

    /* @ngInject */
    function BreadcrumbsController($stateParams, breadcrumbsService) {
        var vm = this;

        vm.folders = breadcrumbsService.createBreadcrumbs($stateParams.path);
        vm.currentFolder = vm.folders.pop();
    }
}(angular));