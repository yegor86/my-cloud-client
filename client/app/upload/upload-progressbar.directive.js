(function (angular) {
    'use strict';

    angular
        .module('app.upload')
        .directive('mccUploadProgressbar', uploadProgressbar);

    /* @ngInject */
    function uploadProgressbar() {
        return {
            require: 'mccModalWindow',
            templateUrl: 'app/upload/upload-progressbar.html',
            controller: UploadProgressbarController,
            controllerAs: 'uploadProgressbar',
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs, modalWindow) {
            scope.$on('uploadProgressStart', function (event, file) {
                scope.$apply(function () {
                    scope.fileName = file.name;
                });
                modalWindow.open(event);
                scope.uploadFile(file);
            });

            scope.$on('uploadProgressEnd', function (event) {
                modalWindow.close(event);
            });
        }
    }

    /* @ngInject */
    function UploadProgressbarController($state, $stateParams, $scope, uploadService) {
        $scope.uploadFile = uploadFile;

        function uploadFile(file) {
            var path = $stateParams.path;

            uploadService.send({
                filePath: [path, file.name].join('/'),
                email: 'admin@mail.com',
                file: file
            }).then(successHandler);
        }

        function successHandler(response) {
            $state.reload($state.current);

            $scope.$broadcast('uploadProgressEnd');
        }
    }
}(angular));
