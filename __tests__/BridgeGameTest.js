const BridgeGame = require("../src/BridgeGame");

describe("브릿지 게임 클래스 테스트", () => {
  test("재시도 두 번, 둘째 칸에서 실패", () => {
    const bridge = ["U", "D", "U"];
    const bridgeGame = new BridgeGame(bridge);

    bridgeGame.retry();
    bridgeGame.retry();
    bridgeGame.move("U");
    bridgeGame.out("U");

    const [map, success, tryCount] = bridgeGame.getResult();

    expect(map).toEqual(["[ O | X ]", "[   |   ]"]);
    expect(success).toBeFalsy();
    expect(tryCount).toEqual(3);
  });

  test("재시도 한 번, 성공", () => {
    const bridge = ["U", "D", "U"];
    const bridgeGame = new BridgeGame(bridge);

    bridgeGame.retry();
    bridgeGame.move("U");
    bridgeGame.move("D");
    bridgeGame.move("U");

    const [map, success, tryCount] = bridgeGame.getResult();

    expect(map).toEqual(["[ O |   | O ]", "[   | O |   ]"]);
    expect(success).toBeTruthy();
    expect(tryCount).toEqual(2);
  });
});
