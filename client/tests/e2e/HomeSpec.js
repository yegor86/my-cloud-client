'use strict';

describe('myCloudDriveApp', function() {

    beforeEach(function() {
        browser.get('http://localhost:3000/');
    });

    it('should be a home link', function() {
        var linkAbout = element(by.css('a'));
        linkAbout.click();

        var linkHome = element(by.css('a'));

        expect(linkHome.getText()).toBe('home');
    });
});
