const BridgeGame = require("../src/Model/BridgeGame");

describe("BridgeGame 게임 시작부터 성공까지 기능 테스트(다리 길이 3)", () => {
  const bridgeGame = new BridgeGame();
  bridgeGame.setBridge(["U", "D"]);

  test("이동 성공 확인", () => {
    expect(bridgeGame.checkSuccess("U", "U")).toBeTruthy();
  });

  test("이동 함수 확인", () => {
    expect(bridgeGame.move("D")).toBeFalsy();
  });
});
