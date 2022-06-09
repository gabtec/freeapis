const utils = require("../../src/utils/index");

describe("isLeapYear()", () => {
  it("should return true if year 2000", () => {
    const result = utils.isLeapYear(2000);

    expect(result).toBe.true;
  });

  it("should return true if year 2004", () => {
    const result = utils.isLeapYear(2004);

    expect(result).toBe.true;
  });

  it("should return true if year 2008", () => {
    const result = utils.isLeapYear(2008);

    expect(result).toBe.true;
  });

  it("should return true if year 2000 as string", () => {
    const result = utils.isLeapYear("2000");

    expect(result).toBe.true;
  });

  it("should return false if year 1900", () => {
    const result = utils.isLeapYear(1900);

    expect(result).toBe.false;
  });

  it("should return false if year 2001", () => {
    const result = utils.isLeapYear(2001);

    expect(result).toBe.false;
  });

  it("should return false if year 1955", () => {
    const result = utils.isLeapYear(1955);

    expect(result).toBe.false;
  });

  it("should throw error if invalid year", () => {
    expect(() => {
      utils.isLeapYear("not a year");
    }).toThrow();
  });

  it("should throw error if invalid year", () => {
    expect(() => {
      utils.isLeapYear("not a year");
    }).toThrow("Deve indicar um ano válido!");
  });
});
