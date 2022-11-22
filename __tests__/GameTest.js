const BridgeGame = require("../src/BridgeGame");

describe("게임 테스트", () => {
  test("유저 이동 테스트 mark = O인 경우", () => {
    const game = new BridgeGame();
    game.realBridge = ["U", "D", "U", "D"];
    game.curr = 0;

    const mark = game.move("U");
    expect(mark).toBe("O");
  });
  test("유저 이동 테스트 mark = X인 경우", () => {
    const game = new BridgeGame();
    game.realBridge = ["U", "D", "U", "D"];
    game.curr = 0;

    const mark = game.move("D");
    expect(mark).toBe("X");
  });
});
