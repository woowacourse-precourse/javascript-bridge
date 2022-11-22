const BridgeGame = require("../src/model/BridgeGame");

describe("BridgeGame 기능 테스트", () => {
  test("정확한 게임 상태를 저장한다", () => {
    BridgeGame.bridge = ["U", "D", "U"];
    BridgeGame.saveState("D");

    const expected = [1, [["D", "X"]]];

    expect([BridgeGame.movingCount, BridgeGame.currentState]).toStrictEqual(
      expected
    );
  });

  test("정확한 게임 정보를 생성한다", () => {
    BridgeGame.bridge = ["U", "D", "U", "U"];
    BridgeGame.currentState = [
      ["U", "O"],
      ["D", "O"],
    ];
    BridgeGame.tryCount = 3;

    const expected = {
      gameState: [
        ["U", "O"],
        ["D", "O"],
      ],
      originBridgeSize: 4,
      tryCount: 3,
    };

    expect(BridgeGame.createGameInfo()).toStrictEqual(expected);
  });

  test("정상적으로 초기화를 수행한다.", () => {
    BridgeGame.movingCount = 4;
    BridgeGame.currentState = [
      ["U", "O"],
      ["D", "O"],
      ["D", "O"],
      ["D", "X"],
    ];
    BridgeGame.tryCount = 2;
    BridgeGame.resetState();

    const expected = [0, [], 3];

    expect([
      BridgeGame.movingCount,
      BridgeGame.currentState,
      BridgeGame.tryCount,
    ]).toStrictEqual(expected);
  });
});
