(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    module.directive('contextMenu', function ($document, ContextMenu, Download) {

        return {
            restrict: "A",
            controller: function ($scope) {
                $scope.click = function (action) {
                    switch (action.name) {
                        case "upload":
                            angular.element($document[0].getElementById('modal-upload')).scope().open();
                            break;
                        case "create-folder":
                            angular.element($document[0].getElementById('modal-create-folder')).scope().open();
                            break;
                        case "download":
                            Download.download(menu.fileName);
                            break;
                    }
                };
            },
            link: function ($scope, $element) {
                ContextMenu.reset();
                // menu.scope = angular.element($document[0].getElementById('context-menu')).scope();

                // // Trigger right click on the element(e.g. file)
                // $element.bind('contextmenu', function (event) {
                //     // Prevent a default context menu
                //     event.preventDefault();
                //     // Doesn't trigger $document 'contextmenu' event
                //     event.stopPropagation();

                //     menu.fileName = event.target.name;

                //     // Executes a function outside of the context menu controller
                //     menu.scope.$apply(function () {
                //         menu.scope.actions = ContextMenu.getContextMenuActions('file');
                //     });

                //     menu.open(event);
                // });

                // Trigger right click on the document
                $document.bind('contextmenu', function (event) {
                    // Prevent a default context menu
                    event.preventDefault();

                    // Executes a function outside of the context menu controller
                    // menu.scope.$apply(function () {
                    //     menu.scope.actions = ContextMenu.getContextMenuActions('document');
                    // });

                    // menu.open(event);
                    ContextMenu.openMenuWithType(event, 'document');
                    
                });

                $document.bind('click', function (event) {
                    ContextMenu.closeMenu();
                });
            }   
        };
    });
}(angular));