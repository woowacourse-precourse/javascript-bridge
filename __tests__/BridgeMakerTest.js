const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("bridgeMaker 테스트", () => {
  test("입력 예외 테스트: 범위를 넘는 수를 입력했을 때", () => {
    expect(() => {
      BridgeMaker.makeBridge(1, BridgeRandomNumberGenerator.generate);
    }).toThrow("[ERROR]");
  });
  test("입력 예외 테스트: 숫자가 아닌 문자를 입력했을 때", () => {
    expect(() => {
      BridgeMaker.makeBridge("a", BridgeRandomNumberGenerator.generate);
    }).toThrow("[ERROR]");
  });
  test("입력 예외 테스트: 실수를 입력했을 때", () => {
    expect(() => {
      BridgeMaker.makeBridge(8.5, BridgeRandomNumberGenerator.generate);
    }).toThrow("[ERROR]");
  });
});
