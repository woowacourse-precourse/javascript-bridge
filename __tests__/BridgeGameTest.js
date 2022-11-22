const BridgeGame = require("../src/BridgeGame");

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

describe("브릿지 게임 클래스 테스트", () => {
  test("잘못 된 길로 이동 했을 때, 추락", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const playerRoute = ["U", "U"];

    runMove(bridgeGame, playerRoute);

    expect(bridgeGame.isFallen()).toBeTruthy();
  });

  test("올바른 된 길로 이동 했을 때, 추락하지 않음", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const playerRoute = ["U", "D"];

    runMove(bridgeGame, playerRoute);

    expect(bridgeGame.isFallen()).toBeFalsy();
  });

  test("재시도 두 번, 둘째 칸에서 실패", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const retryCount = 2;
    const playerRoute = ["U", "U"];

    runRetry(bridgeGame, retryCount);
    runMove(bridgeGame, playerRoute);

    const [map, isClear, tryCount] = bridgeGame.getResult();

    expect(map).toEqual(["[ O | X ]", "[   |   ]"]);
    expect(isClear).toBeFalsy();
    expect(tryCount).toEqual(3);
  });

  test("재시도 한 번, 성공", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const retryCount = 1;
    const playerRoute = ["U", "D", "U"];

    runRetry(bridgeGame, retryCount);
    runMove(bridgeGame, playerRoute);

    const [map, isClear, tryCount] = bridgeGame.getResult();

    expect(map).toEqual(["[ O |   | O ]", "[   | O |   ]"]);
    expect(isClear).toBeTruthy();
    expect(tryCount).toEqual(2);
  });
});
