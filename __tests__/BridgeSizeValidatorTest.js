const BridgeSizeValidator = require("../src/validator/BridgeSizeValidator");

describe("BridgeSizeValidator 클래스 테스트", () => {
  test.each([[" "], ["가나다"], ["-123"], ["4.5"], ["4 1"], ["4d4"]])(
    "입력한 다리 길이가 숫자가 아니면 예외가 발생한다.",
    (testString) => {
      const bridgeSizeValidator = new BridgeSizeValidator();

      expect(() => bridgeSizeValidator.validate(testString)).toThrow();
    }
  );

  test.each([["1"], ["2000"], ["21"], ["2"]])(
    "입력한 다리 길이가 3 이상 20 이하가 아니면 예외가 발생한다.",
    (testString) => {
      const bridgeSizeValidator = new BridgeSizeValidator();

      expect(() => bridgeSizeValidator.validate(testString)).toThrow();
    }
  );
});
