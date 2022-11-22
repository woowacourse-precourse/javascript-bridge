const BridgeMap = require("../src/model/BridgeMap");

describe("BridgeMap 클래스 테스트", () => {
  test("이동한 Map을 생성한다.", () => {
    const bridgeMap = new BridgeMap()
    bridgeMap.buildMap('U',true);
    const map = bridgeMap.getMap();
    expect(map['U']).toEqual(['O']);
    expect(map['D']).toEqual([' ']);
  });
});