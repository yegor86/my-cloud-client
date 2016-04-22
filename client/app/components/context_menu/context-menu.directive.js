(function (angular) {
    'use strict';

    angular
        .module('app.context-menu')
        .directive('mccContextMenu', contextMenu);

    /* @ngInject */
    function contextMenu($document) {
        return {
            link: link,
            templateUrl: 'app/components/context_menu/context-menu.html',
            controller: ContextMenuController,
            controllerAs: 'contextMenu',
            restrict: 'A'
        };

        function link(scope, element, attrs, contextMenu) {
            // Trigger right click on the document
            $document.bind('contextmenu', function (event) {
                // Prevent a default context menu
                event.preventDefault();

                contextMenu.create(element, 'document', event);
            });

            $document.bind('click', function (event) {
                contextMenu.hide(element);
            });

            scope.$on('rightClickOnFile', function (event, mouseEvent, item) {
                //noinspection JSUnresolvedFunction
                event.stopPropagation();
                contextMenu.create(element, item.type, mouseEvent);
                scope.fileName = item.name;
            });

            scope.$on('rightClickOnAction', function (event, action) {
                //noinspection JSUnresolvedFunction
                event.stopPropagation();
                contextMenu.click(action);
                contextMenu.hide(element);
            });
        }
    }

    /* @ngInject */
    function ContextMenuController($scope, downloadService, contextMenuService) {
        var vm = this;
        vm.click = clickOnAction;
        vm.create = createMenu;
        vm.hide = hideMenu;
        vm.isShown = false;

        function clickOnAction(action) {
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
        
        function createMenu(element, menuType, event) {
            setPosition(element, event);
            if (vm.menuType !== menuType) {
                vm.actions = contextMenuService.getActions(menuType);
                vm.menuType = menuType;
                $scope.$apply();
            }
            showMenu(element);
        }

        function setPosition(element, event) {
            element.css('top', contextMenuService.getTopPosition(element, event) + 'px');
            element.css('left', contextMenuService.getLeftPosition(element, event) + 'px');
        }
        
        function showMenu(element) {
            if (vm.isShown === false && vm.menuType !== undefined) {
                vm.isShown = true;
                element.addClass('opened');
            }       
        }
        
        function hideMenu(element) {
            if (vm.isShown === true) {
                vm.isShown = false;
                element.removeClass('opened');
            }
        }
    }
}(angular));