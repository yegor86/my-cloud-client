(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function UploadProgressbarCtrl($scope) {
        $scope.fileName = '';
    }

    module.controller('UploadProgressbarCtrl', UploadProgressbarCtrl);
}(angular));