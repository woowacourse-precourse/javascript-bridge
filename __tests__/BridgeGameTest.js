const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 테스트", () => {
  const bridgeGame = new BridgeGame(["U", "D", "D"]);

  test("다리를 만들어 첫 번째 정답 다리 상태 반환", () => {
    const { topBridge, bottomBridge } = bridgeGame.move(); //1
    expect(topBridge).toEqual(["O"]);
    expect(bottomBridge).toEqual([" "]);
  });

  test("입력값이 정답과 일치하지 않는지 확인", () => {
    expect(bridgeGame.checkFail("U")).toBeTruthy();
  });

  test("오답일 때 다리 상태 반환", () => {
    const { topBridge, bottomBridge } = bridgeGame.insertFailValue(bridgeGame.move());

    expect(topBridge).toEqual(["O", " ", "X"]);
    expect(bottomBridge).toEqual([" ", "O", " "]);
  });

  test("mpveCount만큼 누적된 정답 다리 상태 반환", () => {
    const { topBridge, bottomBridge } = bridgeGame.bridgeResult();
    expect(topBridge).toEqual(["O", " "]);
    expect(bottomBridge).toEqual([" ", "O"]);
  });

  test("끝까지 정답만 입력했을 때 다리 상태 반환", () => {
    bridgeGame.move();
    expect(bridgeGame.gameFinish()).toBeTruthy();
  });
});
