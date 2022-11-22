const BridgeMap = require("../src/model/BridgeMap");

describe("BridgeMap 기능 테스트", () => {
  test("정확하게 다리를 건설한다.", () => {
    BridgeMap.buildBridge("U", "O");

    const expected = ["[ O ", "[   "];

    expect([BridgeMap.upBridge, BridgeMap.downBridge]).toStrictEqual(expected);
  });

  test("정확하게 다리를 완성한다.", () => {
    BridgeMap.upBridge = "[ O |   ";
    BridgeMap.downBridge = "[   | X ";
    BridgeMap.completeBridge(true);

    const expected = ["[ O |   ]", "[   | X ]"];

    expect([BridgeMap.upBridge, BridgeMap.downBridge]).toStrictEqual(expected);
  });

  test("정상적으로 다리를 초기화한다.", () => {
    BridgeMap.upBridge = "[ O |   |   ]";
    BridgeMap.downBridge = "[   | O | X ]";
    BridgeMap.resetBridge();

    const expected = ["[ ", "[ "];

    expect([BridgeMap.upBridge, BridgeMap.downBridge]).toStrictEqual(expected);
  });
});
