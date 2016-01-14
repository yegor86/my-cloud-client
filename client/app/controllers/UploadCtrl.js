(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function UploadCtrl($state, $stateParams, $scope, Upload) {

        function successHandler(response) {
            $state.reload($state.current);

            $scope.modalUploadProgressbarScope.close();
        }

        $scope.upload = function (file) {
            var path = $stateParams.path;

            Upload.send({
                filePath: [path, file.name].join('/'),
                email: $scope.userEmail,
                file: file
            }).then(successHandler);
        };
    }

    module.controller('UploadCtrl', UploadCtrl);
}(angular));