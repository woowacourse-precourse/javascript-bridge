const BridgeMaker = require("../src/BridgeMaker");

describe("다리 생성 테스트", () => {
  test("다리 생성 테스트1", () => {
    const bridge = BridgeMaker.makeBridge(3, [1, 0, 0]);
    expect(bridge).toEqual(["U", "D", "D"]);
  });
  test("다리 생성 테스트2", () => {
    const bridge = BridgeMaker.makeBridge(5, [0, 1, 1, 0, 0]);
    expect(bridge).toEqual(["D", "U", "U", "D", "D"]);
  });
});
