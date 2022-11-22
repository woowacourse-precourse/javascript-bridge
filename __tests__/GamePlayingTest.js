const BridgeGame = require("../src/BridgeGame");

describe("게임 진행 테스트", () => {
  test("플레이어 이동 테스트", () => {
    const bridgeGame = new BridgeGame(["U", "U", "U"]);
    bridgeGame.move("D");
    expect(bridgeGame.getMoveHistory()).toEqual(["D"]);
    bridgeGame.move("U");
    expect(bridgeGame.getMoveHistory()).toEqual(["D", "U"]);
    bridgeGame.move("U");
    expect(bridgeGame.getMoveHistory()).toEqual(["D", "U", "U"]);
  }),
    test("이동 칸 판단 테스트", () => {
      const bridgeGame = new BridgeGame(["U", "U", "U"]);
      expect(bridgeGame.move("D")).toEqual(false);
      expect(bridgeGame.move("D")).toEqual(false);
      expect(bridgeGame.move("U")).toEqual(true);
    }),
    test("게임 성공 테스트", () => {
      const bridgeGame = new BridgeGame(["U", "D", "U"]);
      const input = ["U", "U", "U"];
      let result = true;
      for (let i = 0; i < input.length; i++) {
        const isCorrect = bridgeGame.move(input[i]);
        if (!isCorrect) {
          result = false;
          break;
        }
        if (bridgeGame.isFinished()) {
          if (isCorrect) continue;
          result = false;
          break;
        }
        if (isCorrect) continue;
      }
      expect(result).toEqual(false);
    }),
    
    
});
