(function (angular) {
    'use strict';

    angular
        .module('app.context-menu')
        .directive('mccContextMenu', contextMenu);

    /* @ngInject */
    function contextMenu($document, contextMenuService) {
        return {
            link: link,
            templateUrl: 'app/components/context_menu/context-menu.html',
            controller: ContextMenuController,
            controllerAs: 'contextMenu',
            restrict: 'A'
        };

        function link(scope, element) {
            // Trigger right click on the document
            $document.bind('contextmenu', function (event) {
                // Prevent a default context menu
                event.preventDefault();

                contextMenuService.createMenu('document', event);
            });

            $document.bind('click', function (event) {
                contextMenuService.hideMenu();
            });

            contextMenuService.element = element;
        }
    }

    /* @ngInject */
    function ContextMenuController($scope, downloadService, contextMenuService) {
        var vm = this;
        vm.click = clickOnAction;
        vm.service = contextMenuService;

        function clickOnAction(action, event) {
            // Hides the menu in case the right click on the action
            if (event.type === 'contextmenu') {
                contextMenuService.hideMenu();
            }
            switch (action.name) {
                case "upload":
                    $scope.$emit('upload');
                    break;
                case "create-folder":
                    $scope.$emit('createFolder');
                    break;
                case "download":
                    downloadService.download('admin@mail.com', $scope.fileName);
                    break;
                case "share-folder":
                    $scope.$emit('shareFolder');
                    break;
            }
        }
    }
}(angular));