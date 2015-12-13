(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    module.directive('contextMenu', function ($document, ContextMenu, Download) {
        var menu = {};

        menu.isOpened = false;
        menu.fileName = "";

        menu.open = function (event) {
            this.isOpened = true;
            menu.fileName = event.target.text;

            var doc = $document[0].documentElement,
                docLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
                docTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
                elementWidth = this.menuHtmlElement[0].scrollWidth,
                elementHeight = this.menuHtmlElement[0].scrollHeight,
                docWidth = doc.clientWidth + docLeft,
                docHeight = doc.clientHeight + docTop,
                totalWidth = elementWidth + event.pageX,
                totalHeight = elementHeight + event.pageY,
                left = Math.max(event.pageX - docLeft, 0),
                top = Math.max(event.pageY - docTop, 0);

            if (totalWidth > docWidth) {
                left = left - (totalWidth - docWidth);
            }

            if (totalHeight > docHeight) {
                var marginBottom = ContextMenu.marginBottom || 0;
                top = top - (totalHeight - docHeight) - marginBottom;
            }

            this.menuHtmlElement.css('top', top + 'px');
            this.menuHtmlElement.css('left', left + 'px');

            this.menuHtmlElement.addClass('opened');
        };

        menu.close = function () {
            if (this.isOpened === true) {
                this.menuHtmlElement.removeClass('opened');
                this.isOpened = false;
            }
        };

        return {
            restrict: "A",
            controller: function ($scope, $element) {
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
                menu.menuHtmlElement = angular.element($document[0].getElementById('context-menu'));

                menu.scope = menu.menuHtmlElement.scope();

                // Trigger right click on the element(e.g. file)
                $element.bind('contextmenu', function (event) {
                    // Prevent a default context menu
                    event.preventDefault();
                    // Doesn't trigger $document 'contextmenu' event
                    event.stopPropagation();

                    menu.fileName = event.target.name;

                    // Executes a function outside of the context menu controller
                    menu.scope.$apply(function () {
                        menu.scope.actions = ContextMenu.getContextMenuActions('file');
                    });

                    menu.open(event);
                });

                // Trigger right click on the document
                $document.bind('contextmenu', function (event) {
                    // Prevent a default context menu
                    event.preventDefault();

                    // Executes a function outside of the context menu controller
                    menu.scope.$apply(function () {
                        menu.scope.actions = ContextMenu.getContextMenuActions('document');
                    });

                    menu.open(event);
                });

                $document.bind('click', function (event) {
                    menu.close();
                });
            }
        };
    });
}(angular));