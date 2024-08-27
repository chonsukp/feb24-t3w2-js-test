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

    test("messageRepeater repeats words correctly", () => {
        let repeatedMessage = messageRepeater("hello");

        expect(repeatedMessage).toEqual("hellohellohello");
        expect(repeatedMessage).toHaveLength(15);
        
    });

    test("messageRepeater repeats numbers correctly", () => {
        let repeatedMessage = messageRepeater(1);

        expect(repeatedMessage).toStrictEqual("111");
        expect(repeatedMessage).toHaveLength(3);
    });

    test("messageRepeater repeats array correctly", () => {
        let repeatedMessage = messageRepeater(["hello", "world"]);
        console.log(repeatedMessage);
        expect(repeatedMessage).toEqual(["hello", "world", "hello", "world", "hello", "world"]);
        expect(repeatedMessage).toHaveLength(6);
    });

    test("messageRepeater repeats null or whitespace correctly", () => {
        let repeatedMessage = messageRepeater("");

        expect(repeatedMessage).toStrictEqual("");
        expect(repeatedMessage).toHaveLength(0);
    });

});