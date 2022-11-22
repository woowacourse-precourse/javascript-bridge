const BridgeCommandValidator = require("../../src/validator/BridgeCommandValidator");

describe("BridgeCommandValidator 클래스 테스트", () => {
  test.each([["r"], ["q"], [" "], ["x"], ["!"]])(
    "입력한 명령어가 Q나 R가 아니면 에러가 발생한다.",
    (testString) => {
      const bridgeCommandValidator = new BridgeCommandValidator();

      expect(() => bridgeCommandValidator.validate(testString)).toThrow();
    }
  );

  test.each([["Q"], ["R"]])(
    "입력한 명령어가 Q나 R가 맞으면 에러가 발생하지 않는다.",
    (testString) => {
      const bridgeCommandValidator = new BridgeCommandValidator();

      expect(() => bridgeCommandValidator.validate(testString)).not.toThrow();
    }
  );

});
