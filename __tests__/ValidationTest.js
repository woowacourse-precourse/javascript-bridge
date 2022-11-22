const Validation = require("../src/util/Validation.js");

describe("Validation 테스트", () => {
  test("다리 길이가 3이상 20이하인 숫자가 아니라면 예외 처리. - 3미만인 수", () => {
    expect(() => {
      Validation.checkLength(2);
    }).toThrow("[ERROR]");
  });
  test("다리 길이가 3이상 20이하인 숫자가 아니라면 예외 처리. - 빈칸", () => {
    expect(() => {
      Validation.checkLength("");
    }).toThrow("[ERROR]");
  });
  test("다리 길이가 3이상 20이하인 숫자가 아니라면 예외 처리. - 20초과인 수", () => {
    expect(() => {
      Validation.checkLength(21);
    }).toThrow("[ERROR]");
  });
});
