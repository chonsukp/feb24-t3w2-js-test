// import a specific function from the file
const {niceLogger, messageRepeater} = require("../src/niceLogger");

// import the file
const niceLoggerFile = require("../src/niceLogger");
// import a specific function from the file
const niceLoggerFunction = niceLoggerFile.niceLogger;


describe("niceLogger function tests", () => {

    test("niceLogger returns Hello World!", () => {
        expect(niceLogger()).toBe("Hello World!");
    });

});

describe("messageRepeater repeats words correctly", () => {

    test.skip("messageRepeater repeats words correctly", () => {
        
    });

    test.skip("messageRepeater repeats numbers correctly", () => {

    });

    test.skip("messageRepeater repeats array correctly", () => {

    });

    test.skip("messageRepeater repeats null or whitespace correctly", () => {

    });

});