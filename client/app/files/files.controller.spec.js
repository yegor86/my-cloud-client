describe('FilesController', function () {
    'use strict';

    var scope, parentScope, controller, httpBackend, stateParams, state;

    beforeEach(module('app'));

    beforeEach(inject(function ($httpBackend, $rootScope, $controller, $state) {
        stateParams = {path: '/dir/'};
        state = $state;
        state.current = state.get('home');
        parentScope = $rootScope.$new();
        scope = parentScope.$new();
        controller = $controller('FilesController', {$scope: scope, $state: state, $stateParams: stateParams});
    }));

    it('should not transition to dir', function () {
        var item = {name: 'test.txt', type: 'text', folder: false};
        controller.clickOnItem(item);
        expect(state.transition).toBe(null);
    });

    it('should remove a slash in the end of the path', function () {
        var item = {name: 'test.txt', type: 'text', folder: true};
        var path = stateParams.path;
        controller.clickOnItem(item);
        expect(stateParams.path).toBe(path.slice(0, -1));
    });

    it('should transition to dir', function () {
        var item = {name: 'dir2', type: 'dir', folder: true};
        controller.clickOnItem(item);
        expect(state.transition).not.toBe(null);
    });
});
