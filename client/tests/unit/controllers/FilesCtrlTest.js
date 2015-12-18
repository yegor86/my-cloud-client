describe('FilesCtrl', function () {
    "use strict";

    var scope, parentScope, ctrl, httpBackend, state, stateParams;

    beforeEach(module('myCloudDriveApp'));
    beforeEach(inject(function ($httpBackend, $rootScope, $controller, $templateCache) {
        httpBackend = $httpBackend;
        stateParams = {path: '/dir'};

        httpBackend.expectGET('/files/list%2Fdir').respond([
                {name: "some-image.jpg", type: "image"},
                {name: "some-text.txt", type: "text"},
                {name: "some-dir", type: "dir"}]);

        $templateCache.put('partials/home.html', '');
        $templateCache.put('partials/home.files.html', '');
        $templateCache.put('partials/home.context-menu.html', '');
        $templateCache.put('partials/home.upload.html', '');
        $templateCache.put('partials/home.upload-progressbar.html', '');
        $templateCache.put('partials/home.create-folder.html', '');

        parentScope = $rootScope.$new();
        parentScope.setBreadcrumbs = function () {};
        $controller('HomeCtrl', {$scope: parentScope});
        scope = parentScope.$new();
        ctrl = $controller('FilesCtrl', {$scope: scope, $stateParams: stateParams});
    }));

    it('should get the response with 3 items', function () {
        httpBackend.flush();
        expect(scope.items.length).toBe(3);
    });

    it('should not transition to dir', function () {
        scope.clickOnItem({name: "image.png", type: "image"});
    });
});
