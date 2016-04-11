(function (angular) {
    'use strict';

    angular
        .module('app.create-folder')
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

        function create(event) {
            var path = $stateParams.path;

            createFolderService.send({
                path: [path, $scope.folderName].join('/'),
                email: "admin@mail.com"
            }, successHandler);

            $scope.$broadcast('closeModalWindow');
        }

        function successHandler(response) {
            $state.reload($state.current);
        }
    }
}(angular));