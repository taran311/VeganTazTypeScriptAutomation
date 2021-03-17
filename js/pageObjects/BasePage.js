"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const protractor_1 = require("protractor");
class BasePage {
    constructor() {
        this.btnHome = protractor_1.element(protractor_1.by.css('#nav-index'));
        this.btnFatloss = protractor_1.element(protractor_1.by.css('#nav-fatloss'));
        this.btnExercise = protractor_1.element(protractor_1.by.css('#nav-exercise'));
        this.btnDiet = protractor_1.element(protractor_1.by.css('#nav-diet'));
        this.btnTraining = protractor_1.element(protractor_1.by.css('#nav-training'));
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9CYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBZ0Q7QUFFaEQsTUFBYSxRQUFRO0lBQXJCO1FBQ0UsWUFBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUM3QyxnQkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQy9DLFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN2QyxnQkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FBQTtBQU5ELDRCQU1DIn0=