(function (angular) {
    'use strict';

    angular
        .module('app.files')
        .controller('FilesController', FilesController);

    /* @ngInject */
    function FilesController($state, $stateParams, filesService, contextMenuService) {
        var vm = this;
        vm.isEmpty = false;
        vm.clickOnItem = clickOnItem;
        vm.rightClickOnItem = rightClickOnItem;

        vm.items = filesService.query({email: 'admin@mail.com', path: $stateParams.path || ""},
            successHandler, errorHandler);

        function errorHandler(error) {
            $state.transitionTo('error');
        }

        function successHandler(response) {
            if (response.length === 0) {
                vm.isEmpty = true;
            }
        }

        function clickOnItem(item) {
            if (item.folder === true) {
                // Remove a slash in the end of the path to avoid double slashes after concatenation
                if ($stateParams.path[$stateParams.path.length - 1] === '/') {
                    $stateParams.path = $stateParams.path.slice(0, -1);
                }

                $state.transitionTo(
                    $state.current,
                    {path: [$stateParams.path, item.name].join("/")},
                    {reload: false});
            }
        }

        function rightClickOnItem(event, item) {
            contextMenuService.createMenu(item.type);
        }
    }
}(angular));