const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("도메인 기능 유닛테스트", () => {
  test("makeBridge length 테스트", () => {
    expect(
      BridgeMaker.makeBridge(9, BridgeRandomNumberGenerator.generate).length
    ).toBe(9);
  });

  test("makeBridge 1,0만 포함됐는지 테스트", () => {
    expect(
      BridgeMaker.makeBridge(9, BridgeRandomNumberGenerator.generate).includes(
        2
      )
    ).toBe(false);
  });
});
