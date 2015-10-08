'use strict';

describe('myCloudDriveApp', function() {

    beforeEach(function() {
        browser.get('http://localhost:3000/');
    });

    it('should have a title', function() {
        var input = element(by.model('customSpice'));
        var chiliButton = element(by.css('#chili'));
        var text = element(by.css('p'));

        chiliButton.click();

        expect(input.getAttribute('value')).toBe('wasabi');
    });
});
