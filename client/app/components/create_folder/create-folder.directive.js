(function (angular) {
    'use strict';

    angular
        .module('app.files')
        .directive('mccCreateFolder', createFolder);

    /* @ngInject */
    function createFolder($document) {
        return {
            require: 'mccModalWindow',
            templateUrl: 'app/components/create_folder/create-folder.html',
            controller: CreateFolderController,
            controllerAs: 'createFolder',
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs, modalWindow) {
            scope.$on('createFolder', function (event) {
                event.stopPropagation();
                modalWindow.open(event);
                $document[0].getElementById('folder-name').focus();
            });
        }
    }

    /* @ngInject */
    function CreateFolderController($state, $stateParams, $scope, createFolderService) {
        var vm = this;
        vm.create = create;
        vm.close = close;

        function create(event) {
            var path = $stateParams.path;

            createFolderService.send({
                path: [path, $scope.folderName].join('/'),
                email: "admin@mail.com"
            }).then(successHandler);

            $scope.$broadcast('closeModalWindow');
        }

        function close(event) {
            $scope.$broadcast('closeModalWindow');
        }

        function successHandler(response) {
            $state.reload($state.current);
        }
    }
}(angular));