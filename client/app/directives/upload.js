(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    module.directive('upload', function($document, $state) {

        return {
            link: function($scope, $element) {
                var uploadHtmlElement = $('#upload-input');

                $element.bind('click', function(event) {
                    uploadHtmlElement.trigger('click');
                });

                uploadHtmlElement.bind('change', function(event) {
                    $scope.upload(event.target.files);
                    // Close the modal box
                    $scope.close();

                    $state.reload($state.current);
                });
            }
        };
    });
}(angular));
