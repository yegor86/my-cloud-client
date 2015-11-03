(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    module.directive('contextMenu', function($document, ContextMenu) {
        var menu = {};

        menu.isOpened = false;

        menu.open = function open(event) {
            this.isOpened = true;
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

        menu.close = function close() {
            if (this.isOpened === true) {
                this.menuHtmlElement.removeClass('opened');
                this.isOpened = false;
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

                    menu.menuHtmlElement = angular.element($document[0].getElementById(ContextMenu.id));

                    menu.open(event);
                });

                // Trigger right click on the document
                $document.bind('contextmenu', function(event) {
                    // Prevent a default context menu
                    event.preventDefault();
                });

                $document.bind('click', function(event) {
                    menu.close();
                });
            }
        };
    });
}(angular));