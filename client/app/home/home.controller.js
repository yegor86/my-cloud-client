(function (angular) {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController($scope) {
        // Set a default sort type
        $scope.sortType = 'name';

        $scope.sortReverse = true;
    }
}(angular));