(function (angular) {
    'use strict';

    angular.module('app.home', [
        'app.files',
        'app.context-menu',
        'app.create-folder',
        'app.upload',
        'app.share-folder',
        'app.notify'
    ]);
}(angular));