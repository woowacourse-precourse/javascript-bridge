const InputValidator = require("../src/InputValidator");

describe("Validator 테스트", () => {
  test("입력한 길이 유효성 검사", () => {
    expect(InputValidator.isValidLength("10")).toEqual(true);
    expect(InputValidator.isValidLength("3.14")).toEqual(false);
    expect(InputValidator.isValidLength("-22")).toEqual(false);
    expect(InputValidator.isValidLength("22")).toEqual(false);
  });
});
