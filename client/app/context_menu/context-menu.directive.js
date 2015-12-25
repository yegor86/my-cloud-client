(function (angular) {
    'use strict';

    angular
        .module('myCloudDriveApp')
        .directive('mccContextMenu', contextMenu);

    /* @ngInject */
    function contextMenu($document, contextMenuService) {

        return {
            link: link,
            controller: ContextMenuController,
            controllerAs: 'vm',
            restrict: 'A'
        };

        function link() {
            // Trigger right click on the document
            $document.bind('contextmenu', function (event) {
                // Prevent a default context menu
                event.preventDefault();

                contextMenuService.createMenu('document');
                // Executes a function outside of the context menu controller
                contextMenuService.getScope().$apply(function () {
                    contextMenuService.openMenu(event);
                });
            });

            $document.bind('click', function (event) {
                contextMenuService.closeMenu();
            });
        }
    }

    /* @ngInject */
    function ContextMenuController($document, $scope, Download) {
        var vm = this;
        vm.click = click;

        function click(action) {
            switch (action.name) {
                case "upload":
                    angular.element($document[0].getElementById('modal-upload')).scope().open();
                    break;
                case "create-folder":
                    angular.element($document[0].getElementById('modal-create-folder')).scope().open();
                    $document[0].getElementById('folder-name').focus();
                    break;
                case "download":
                    Download.download($scope.fileName);
                    break;
            }
        }
    }
}(angular));