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
                            Download.download($scope.fileName);
                            break;
                    }
                };
            },
            link: function ($scope, $element) {
                
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
            }   
        };
    });
}(angular));