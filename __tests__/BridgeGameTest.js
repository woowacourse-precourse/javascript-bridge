const BridgeGame = require("../src/domain/BridgeGame");

const runRetry = (bridgeGame, retryCount) => {
  for (let count = 0; count < retryCount; count++) {
    bridgeGame.retry();
  }
};

const runMove = (bridgeGame, route) => {
  route.forEach((direction) => {
    bridgeGame.move(direction);
  });
};

describe("BridgeGame 클래스 테스트", () => {
  test("isFallen(): 플레이어 이동(잘못 된 길)", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const playerRoute = ["U", "U"];

    runMove(bridgeGame, playerRoute);

    expect(bridgeGame.isFallen()).toBeTruthy();
  });

  test("isFallen(): 플레이어 이동(올바른 길)", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const playerRoute = ["U", "D"];

    runMove(bridgeGame, playerRoute);

    expect(bridgeGame.isFallen()).toBeFalsy();
  });

  test("isClear(): 다리를 모두 통과", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const playerRoute = ["U", "D", "U"];

    runMove(bridgeGame, playerRoute);

    expect(bridgeGame.isClear()).toBeTruthy();
  });

  test("getMap(): 플레이어가 이동 한 경로 가져오기(올바른 길)", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const playerRoute = ["U", "D"];

    runMove(bridgeGame, playerRoute);

    const map = bridgeGame.getMap();
    expect(map.upperBridgeMap).toEqual("[ O |   ]");
    expect(map.lowerBridgeMap).toEqual("[   | O ]");
  });

  test("getMap(): 플레이어가 이동 한 경로 가져오기(잘못된 길)", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const playerRoute = ["U", "U"];

    runMove(bridgeGame, playerRoute);

    const map = bridgeGame.getMap();
    expect(map.upperBridgeMap).toEqual("[ O | X ]");
    expect(map.lowerBridgeMap).toEqual("[   |   ]");
  });

  test("getResult(): 재시도 두 번, 둘째 칸에서 실패", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const retryCount = 2;
    const playerRoute = ["U", "U"];

    runRetry(bridgeGame, retryCount);
    runMove(bridgeGame, playerRoute);

    const { map, isClear, tryCount } = bridgeGame.getResult();

    expect(map.upperBridgeMap).toEqual("[ O | X ]");
    expect(map.lowerBridgeMap).toEqual("[   |   ]");
    expect(isClear).toBeFalsy();
    expect(tryCount).toEqual(3);
  });

  test("getResult(): 재시도 한 번, 성공", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const retryCount = 1;
    const playerRoute = ["U", "D", "U"];

    runRetry(bridgeGame, retryCount);
    runMove(bridgeGame, playerRoute);

    const { map, isClear, tryCount } = bridgeGame.getResult();

    expect(map.upperBridgeMap).toEqual("[ O |   | O ]");
    expect(map.lowerBridgeMap).toEqual("[   | O |   ]");
    expect(isClear).toBeTruthy();
    expect(tryCount).toEqual(2);
  });
});
