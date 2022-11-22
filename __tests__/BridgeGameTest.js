const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 클래스 테스트", () => {
  let bridgeGame;
  beforeEach(() => {
    bridgeGame = new BridgeGame();
  });

  test("방향 이동 테스트", () => {
    bridgeGame.setBridge(["U", "U", "D"]);

    moved = bridgeGame.move("U");
    expect(moved).toEqual(true);

    moved = bridgeGame.move("D");
    expect(moved).toEqual(false);
  });

  test("지도 업데이트 테스트", () => {
    bridgeGame.updateMap(true, "U");

    expect(bridgeGame.getFormattedMap()).toEqual(["[ O ]", "[   ]"]);
  });

  test("지도 되돌리기 테스트", () => {
    bridgeGame.updateMap(true, "U");
    bridgeGame.undoMap();

    expect(bridgeGame.getFormattedMap()).toEqual(["", ""]);
  });

  test("재시도 테스트", () => {
    const mock = jest.fn();
    const logSpy = jest.spyOn(bridgeGame, "countTry");

    bridgeGame.setBridge(["U", "U", "D"]);
    bridgeGame.move("U");
    bridgeGame.retry(mock);

    expect(bridgeGame.getTryCount()).toEqual(2);
    expect(bridgeGame.getFormattedMap()).toEqual(["", ""]);
    expect(logSpy).toHaveBeenCalled();
  });
});
