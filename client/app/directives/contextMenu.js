(function(angular, document) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    module.directive('contextMenu', function($document, ContextMenu) {
        var menu = {};

        menu.isOpened = false;

        menu.open = function open(event, menuHtmlElement) {
            menu.isOpened = true;
            var doc = $document[0].documentElement,
                docLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
                docTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
                elementWidth = menuHtmlElement[0].scrollWidth,
                elementHeight = menuHtmlElement[0].scrollHeight,
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

            menuHtmlElement.css('top', top + 'px');
            menuHtmlElement.css('left', left + 'px');

            menuHtmlElement.addClass('opened');
        };

        menu.close = function close(menuHtmlElement) {
            if (menu.isOpened === true) {
                menuHtmlElement.removeClass('opened');
                menu.isOpened = false;
            }
        };

        return {
            link: function($scope, $element) {
                // Trigger right click on the element(e.g. file)
                $element.bind('contextmenu', function(event) {
                    // Prevent a default context menu
                    event.preventDefault();
                    // Doesn't trigger $document 'contextmenu' event
                    event.stopPropagation();

                    ContextMenu.menuHtmlElement = angular.element(document.getElementById(ContextMenu.id));

                    menu.open(event, ContextMenu.menuHtmlElement);
                });

                // Trigger right click on the document
                $document.bind('contextmenu', function(event) {
                    // Prevent a default context menu
                    event.preventDefault();
                });

                $document.bind('click', function(event) {
                    menu.close(ContextMenu.menuHtmlElement);
                });
            }
        };
    });
}(angular, document));