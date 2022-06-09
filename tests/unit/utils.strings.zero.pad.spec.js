const utils = require("../../src/utils/index");

describe("zeroPad()", () => {
  it("should do nothing with '12'", () => {
    const result = utils.zeroPad(12);

    expect(result).toBe("12");
  });

  it("should do nothing with '02'", () => {
    const result = utils.zeroPad("02");

    expect(result).toBe("02");
  });

  it("should add a zero to 2 number", () => {
    const result = utils.zeroPad(2);

    expect(result).toBe("02");
  });

  it("should add a zero to 2 string", () => {
    const result = utils.zeroPad("2");

    expect(result).toBe("02");
  });
});
