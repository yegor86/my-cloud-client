(function (angular) {
    'use strict';

    angular
        .module('app.home')
        .config(configure);

    /* @ngInject */
    function configure($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home{path:nonURIEncoded}',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.when('/', '/home');
    }
}(angular));