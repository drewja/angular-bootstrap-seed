'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  describe('ViewOne', function() {

    beforeEach(function() {
      browser.get('/');
      element(by.css('[href="viewone"]')).click();
    });


    it('should render viewtwo when user navigates to /viewtwo', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/View One/);
    });

  });


  describe('ViewTwo', function() {

    beforeEach(function() {
      browser.get('/');
      element(by.css('[href="viewtwo"]')).click();
    });


    it('should render viewtwo when user navigates to /viewtwo', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/View Two/);
    });

  });
});
