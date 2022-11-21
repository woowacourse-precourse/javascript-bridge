const RetryValidator = require("../src/utils/RetryValidator");

describe("DirectionValidtor 테스트", () => {
  test.each([["a"], [1]])(" validateDirection 테스트", (input) => {
    expect(() => {
      RetryValidator.validateRetry(input);
    }).toThrow("[ERROR] 잘못된 입력입니다. R 또는 Q를 입력해주세요.");
  });
});
