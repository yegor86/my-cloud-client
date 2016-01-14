(function (angular) {
    'use strict';

    angular
        .module('myCloudDriveApp')
        .controller('UploadProgressbarController', UploadProgressbarController);

    function UploadProgressbarController($scope) {
        $scope.fileName = '';
    }
}(angular));