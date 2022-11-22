const BridgeGame = require("../src/bridge/BridgeGame");
const BridgeMapMaker = require("../src/bridge/BridgeMapMaker");

describe("Bridge Map Maker", () => {
  let bridgeMapMaker;
  let distance;

  beforeEach(() => {
    distance = 0;
    bridgeMapMaker = new BridgeMapMaker();
  });

  it("내가 원하는 형태의 map이 만들어져야 한다.", () => {
    let map;
    map = bridgeMapMaker.makeMap("U", BridgeGame.PASS, ++distance);
    expect(map).toEqual([["[ O ]"], ["[   ]"]]);
    map = bridgeMapMaker.makeMap("U", BridgeGame.NOT_PASS, ++distance);
    expect(map).toEqual([
      ["[ O ", "| X ]"],
      ["[   ", "|   ]"],
    ]);
  });

  it("onRetry를 호출하면 map은 리셋되어야 한다.", () => {
    let distance = 0;
    let map = bridgeMapMaker.makeMap("U", BridgeGame.PASS, ++distance);
    expect(map).toEqual([["[ O ]"], ["[   ]"]]);
    bridgeMapMaker.onRetry();
    expect(bridgeMapMaker.getCurrentMap()).toEqual([[], []]);
  });
});
