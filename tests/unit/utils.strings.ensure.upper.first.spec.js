const utils = require("../../src/utils/index");

describe("ensureUpperFirst()", () => {
  it("should convert if all lower", () => {
    const result = utils.ensureUpperFirst("gabtec");
    expect(result).toBe("Gabtec");
  });

  it("should convert if all upp", () => {
    const result = utils.ensureUpperFirst("GABTEC");
    expect(result).toBe("Gabtec");
  });

  it("should convert if all mixed", () => {
    const result = utils.ensureUpperFirst("GaBTeC");
    expect(result).toBe("Gabtec");
  });

  it("should convert composed words", () => {
    const result = utils.ensureUpperFirst("GaBTeC gabTEC");
    expect(result).toBe("Gabtec Gabtec");
  });

  it("should convert composed complex words", () => {
    const result = utils.ensureUpperFirst("GaBTeC de gabTEC");
    expect(result).toBe("Gabtec de Gabtec");
  });

  it("should convert composed complex words", () => {
    const result = utils.ensureUpperFirst("albergaria-a-velha");
    expect(result).toBe("Albergaria-a-Velha");
  });

  it("should convert composed complex words", () => {
    const result = utils.ensureUpperFirst("albergaria-a-velha");
    expect(result).toBe("Albergaria-a-Velha");
  });

  it("should convert composed complex words", () => {
    const result = utils.ensureUpperFirst("montemor-O-velho");
    expect(result).toBe("Montemor-o-Velho");
  });

  it("should convert composed complex words", () => {
    const result = utils.ensureUpperFirst("figueira de castelo Rodrigo");
    expect(result).toBe("Figueira de Castelo Rodrigo");
  });

  it("should convert composed complex words", () => {
    const result = utils.ensureUpperFirst("figueiro Dos vinhos");
    expect(result).toBe("Figueiro dos Vinhos");
  });
});
