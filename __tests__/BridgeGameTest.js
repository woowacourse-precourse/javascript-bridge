const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 클래스 테스트", () => {
  test("사용자가 입력한 값과 정답을 비교하여 결과를 도출한다.", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);

    expect(bridgeGame.move("U")).toBe("O");
    expect(bridgeGame.move("D")).toBe("O");
    expect(bridgeGame.move("D")).toBe("X");
  });

  test("다리 건너기 성공했는지 판단하는 기능", () => {
    const bridgeGame = new BridgeGame(["U", "D"]);

    bridgeGame.move("U");
    expect(bridgeGame.isAllPassed()).toBe(false);

    bridgeGame.move("D");
    expect(bridgeGame.isAllPassed()).toBe(true);
  });
});
