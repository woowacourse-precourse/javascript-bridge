const BridgeSizeValidation = require("../src/Validation/BridgeSizeValidation");

describe("BridgeSizeValidation 객체 테스트", () => {
  test("입력받은 다리 길이의 예외상황 발생시 에러를 출력한다.", () => {
    expect(() => BridgeSizeValidation.validateBridgeSize(NaN)).toThrow();
    expect(() => BridgeSizeValidation.validateBridgeSize(1)).toThrow();
    expect(() => BridgeSizeValidation.validateBridgeSize(3.14)).toThrow();
    expect(() => BridgeSizeValidation.validateBridgeSize(5)).not.toThrow();
  });
});
