(function (angular) {
    'use strict';

    angular
        .module('myCloudDriveApp')
        .controller('UploadController', UploadController);

    function UploadController($state, $stateParams, $scope, Upload) {
        var vm = this;
        vm.upload = upload;

        function successHandler(response) {
            $state.reload($state.current);

            $scope.modalUploadProgressbarScope.close();
        }

        function upload(file) {
            var path = $stateParams.path;

            Upload.send({
                filePath: [path, file.name].join('/'),
                email: 'admin@mail.com',
                file: file
            }).then(successHandler);
        }
    }
}(angular));