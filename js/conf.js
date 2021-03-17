"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['specs/HomePageTests.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBWVcsUUFBQSxNQUFNLEdBQVc7SUFDMUIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFDRCxLQUFLLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtJQUNuQyxlQUFlLEVBQUUsOEJBQThCO0lBRS9DLDBFQUEwRTtJQUMxRSxzQ0FBc0M7SUFDdEMsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQyJ9