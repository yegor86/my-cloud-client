(function (angular) {
    'use strict';

    angular
        .module('app.error')
        .config(configure);

    /* @ngInject */
    function configure($stateProvider) {
        $stateProvider
            .state('error', {
                templateUrl: 'app/components/error/error.html',
                controller: 'ErrorController',
                controllerAs: 'vm'
            });
    }
}(angular));