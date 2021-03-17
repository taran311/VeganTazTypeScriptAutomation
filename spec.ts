// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import {HomePage} from './pageObjects/HomePage';

describe('protractor with typescript typings', () => {

  let homePage = new HomePage();

  beforeEach(() => {    
    homePage.get();
  });

  it('should navigate to Home', () => {
    homePage.btnHome.click();
    expect(browser.getCurrentUrl()).toEqual('http://vegantaz.com/index.html');
  });

  it('should navigate to Fatloss', () => {
    homePage.btnFatloss.click();
    expect(browser.getCurrentUrl()).toEqual('http://vegantaz.com/fatloss.html');
  });

  it('should navigate to Exercise', () => {
    homePage.btnExercise.click();
    expect(browser.getCurrentUrl()).toEqual('http://vegantaz.com/exercise.html');
  });

  it('should navigate to Diet', () => {
    homePage.btnDiet.click();
    expect(browser.getCurrentUrl()).toEqual('http://vegantaz.com/diet.html');
  });

  it('should navigate to Training', () => {
    homePage.btnTraining.click();
    expect(browser.getCurrentUrl()).toEqual('http://vegantaz.com/training.html');
  });
});