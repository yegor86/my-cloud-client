(function (angular) {
    'use strict';

    angular
        .module('app.upload')
        .directive('mccUpload', upload);

    /* @ngInject */
    function upload($document) {
        return {
            require: 'mccModalWindow',
            templateUrl: 'app/upload/upload.html',
            controller: UploadController,
            controllerAs: 'upload',
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs, modalWindow) {
            scope.$on('upload', function (event) {
                event.stopPropagation();
                modalWindow.open(event);
            });

            var uploadInputElement = $document[0].getElementById('upload-input');
            scope.$on('chooseFile', function (event) {
                uploadInputElement.click();
            });

            angular.element(uploadInputElement).bind('change', function (event) {
                var file = event.target.files[0];

                modalWindow.close(event);
                scope.$broadcast('uploadProgressStart', file);
            });
        }
    }

    /* @ngInject */
    function UploadController($scope) {
        var vm = this;
        vm.chooseFile = chooseFile;
        vm.close = close;

        function chooseFile(event) {
            $scope.$broadcast('chooseFile');
        }

        function close(event) {
            $scope.$broadcast('closeModalWindow');
        }
    }
}(angular));
