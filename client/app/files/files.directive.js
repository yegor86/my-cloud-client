(function (angular) {
    'use strict';

    angular
        .module('app.files')
        .directive('mccFiles', files);

    /* @ngInject */
    function files() {
        return {
            templateUrl: 'app/files/files.html',
            controller: 'FilesController',
            controllerAs: 'files',
            restrict: 'A'
        };
    }
}(angular));