(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    module.directive('contextMenu', function ($document, ContextMenu, Download) {

        var contextMenuContainerScope = angular.element($document[0].getElementById('context-menu-container')).scope();

        // Trigger right click on the document
        $document.bind('contextmenu', function (event) {
            // Prevent a default context menu
            event.preventDefault();

            var menu = ContextMenu.createMenu('document');
            // Executes a function outside of the context menu controller
            menu.scope.$apply(function () {
                menu.open(event);
            });
        });

        $document.bind('click', function (event) {
            ContextMenu.closeMenu();
        });

        return {
            restrict: "A",
            scope: {
                itemType: '@itemType',
                itemName: '@itemName'
            },
            controller: function ($scope) {
                contextMenuContainerScope.click = function (action) {
                    switch (action.name) {
                        case "upload":
                            angular.element($document[0].getElementById('modal-upload')).scope().open();
                            break;
                        case "create-folder":
                            angular.element($document[0].getElementById('modal-create-folder')).scope().open();
                            $document[0].getElementById('folder-name').focus();
                            break;
                        case "download":
                            Download.download(contextMenuContainerScope.itemName);
                            break;
                    }
                };
            },
            link: function ($scope, $element) {

                // Trigger right click on the file
                $element.bind('contextmenu', function (event) {
                    // Prevent a default context menu
                    event.preventDefault();

                    event.stopPropagation();

                    var menu = ContextMenu.createMenu($scope.itemType);
                    // Executes a function outside of the context menu controller
                    menu.scope.$apply(function () {
                        menu.open(event);
                    });

                    contextMenuContainerScope.itemName = $scope.itemName;
                });
            }   
        };
    });
}(angular));