(function (angular) {
    'use strict';

    angular
        .module('app.context-menu')
        .directive('mccContextMenu', contextMenu);

    /* @ngInject */
    function contextMenu($document, contextMenuService) {
        return {
            link: link,
            templateUrl: 'app/context_menu/context-menu.html',
            controller: ContextMenuController,
            controllerAs: 'contextMenu',
            restrict: 'A'
        };

        function link() {
            // Trigger right click on the document
            $document.bind('contextmenu', function (event) {
                // Prevent a default context menu
                event.preventDefault();

                var menu = contextMenuService.createMenu('document');
                // Executes a function outside of the context menu controller
                menu.scope.$apply(function () {
                    menu.open(event);
                });
            });

            $document.bind('click', function (event) {
                var menu = contextMenuService.getMenu();
                if (menu.isOpened() === true) {
                    menu.close(event);
                }
            });
        }
    }

    /* @ngInject */
    function ContextMenuController($scope, downloadService) {
        var vm = this;
        vm.click = click;

        function click(action) {
            switch (action.name) {
                case "upload":
                    $scope.$emit('upload');
                    break;
                case "create-folder":
                    $scope.$emit('createFolder');
                    break;
                case "download":
                    downloadService.download($scope.fileName);
                    break;
            }
        }
    }
}(angular));