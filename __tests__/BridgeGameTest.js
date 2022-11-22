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

    expect(bridgeGame.map).toEqual([["[ O ]"], ["[   ]"]]);
  });

  test("단계 진행 테스트", () => {
    bridgeGame.stepForward();

    expect(bridgeGame.step).toEqual(1);
  });

  test("단계 되돌리기 테스트", () => {
    bridgeGame.stepForward();
    bridgeGame.stepBackward();

    expect(bridgeGame.step).toEqual(0);
  });

  test("진행 상황 되돌리기 테스트", () => {
    bridgeGame.setBridge(["U", "U", "D"]);
    bridgeGame.move("U");
    bridgeGame.undo();

    expect(bridgeGame.step).toEqual(0);
    expect(bridgeGame.map).toEqual([[], []]);
  });

  test("재시도 테스트", () => {
    const mock = jest.fn();
    const logSpy = jest.spyOn(bridgeGame, "countTry");

    bridgeGame.setBridge(["U", "U", "D"]);
    bridgeGame.move("U");
    bridgeGame.retry(mock);

    expect(bridgeGame.tried).toEqual(2);
    expect(bridgeGame.map).toEqual([[], []]);
    expect(logSpy).toHaveBeenCalled();
  });
});
