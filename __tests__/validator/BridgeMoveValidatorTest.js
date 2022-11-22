const BridgeSpaceValidator = require("../../src/validator/BridgeMoveValidator");

describe("BridgeSpaceValidator 클래스 테스트", () => {
  test.each([["u"], ["d"], [" "], [" U"], ["D "]])(
    "입력한 이동 칸 수 가 U 또는 D가 아니면 에러가 발생한다.",
    (testString) => {
      const bridgeSpaceValidator = new BridgeSpaceValidator();

      expect(() => bridgeSpaceValidator.validate(testString)).toThrow();
    }
  );

  test.each([["U"], ["D"]])(
    "입력한 이동 칸 수 가 U 또는 D면 에러가 발생하지 않는다.",
    (testString) => {
      const bridgeSpaceValidator = new BridgeSpaceValidator();

      expect(() => bridgeSpaceValidator.validate(testString)).not.toThrow();
    }
  );
});
