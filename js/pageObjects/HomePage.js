"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
const protractor_1 = require("protractor");
const BasePage_1 = require("./BasePage");
class HomePage extends BasePage_1.BasePage {
    get() {
        protractor_1.browser.get('http://VeganTaz.com/');
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9Ib21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrRUFBK0U7QUFDL0UsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiwrREFBK0Q7QUFDL0QsK0JBQStCO0FBQy9CLEVBQUU7QUFDRiwwRUFBMEU7QUFDMUUsMkNBQStFO0FBQy9FLHlDQUFvQztBQUVwQyxNQUFhLFFBQVMsU0FBUSxtQkFBUTtJQUNwQyxHQUFHO1FBQ0Qsb0JBQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7QUFKRCw0QkFJQyJ9