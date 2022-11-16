const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("건널 다리 만들기 테스트", () => {
  test("의도한 개수만큼 건널 다리가 생성되는지 테스트", () => {
    const bridge = BridgeMaker.makeBridge(
      3,
      BridgeRandomNumberGenerator.generate
    );
    expect(bridge.length).toBe(3);
  });
});
