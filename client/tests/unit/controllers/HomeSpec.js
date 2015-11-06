describe('HomeCtrl', function() {
    "use strict";

    var scope, ctrl, httpBackend, state, stateParams;

    beforeEach(module('myCloudDriveApp'));
    beforeEach(inject(function($httpBackend, $rootScope, $controller, $templateCache) {
        httpBackend = $httpBackend;
        stateParams = {path: 'dir'};

        httpBackend.expectGET('/files/dir/files.json').respond([
                {name: "some-image.jpg", type: "image"},
                {name: "some-text.txt", type: "text"},
                {name: "some-dir", type: "dir"}]);
        $templateCache.put('partials/home.html', '');
        $templateCache.put('partials/home.files.html', '');
        $templateCache.put('partials/home.context-menu.html', '');

        scope = $rootScope.$new();
        ctrl = $controller('HomeCtrl', {$scope: scope, $stateParams: stateParams});
    }));

    it('should get the response with 3 items', function() {
        httpBackend.flush();
        expect(scope.items.length).toBe(3);
    });

    it('should not transition to dir', function() {
        scope.clickOnItem({name: "image.png", type: "image"});
    });
});
