const { BRIDGE_LENGTH } = require("../src/constants/gameState");
const BridgeValidator = require("../src/utils/BridgeValidator");

describe("BridgeValidator 테스트", () => {
  test.each([[1], [31]])("isInRange 테스트", (input) => {
    expect(() => {
      BridgeValidator.isInRange(input, BRIDGE_LENGTH.START, BRIDGE_LENGTH.END);
    }).toThrow("[ERROR] 3 이상 20이하의 숫자가 아닙니다.");
  });

  test.each([["r"], ["ㄱ"]])("isNumber 테스트", (input) => {
    expect(() => {
      BridgeValidator.isNumber(input);
    }).toThrow("[ERROR] 숫자가 아닙니다.");
  });
});
