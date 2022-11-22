const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("건널 다리 만들기 테스트", () => {
  test("다리 생성 테스트", () => {
    const bridge = BridgeMaker.makeBridge(
      5,
      BridgeRandomNumberGenerator.generate
    );
    expect(bridge.length).toEqual(5);
  });
});