const {niceLogger} = require("../src/niceLogger");


test("niceLogger returns Hello World!", () => {

    expect(niceLogger()).toBe("Hello World!");
});