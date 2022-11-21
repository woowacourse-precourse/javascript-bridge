const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 클래스 테스트", () => {
  test("move 메서드: 첫 move 아닐 경우(moveNum !== 0) 오른쪽 괄호(]) 삭제 후 막대(|) 추가", () => {
    const gameRec = {
      moveNum: 1,
      attemptNum: 1,
      bridgeAnswer: [],
      bridgeOutput: { firstBridge: "[ O ]", secondBridge: "[   ]" },
    };
    const bridgeGame = new BridgeGame();
    bridgeGame.move(gameRec);
    expect(gameRec.bridgeOutput.firstBridge).toEqual("[ O |");
    expect(gameRec.bridgeOutput.secondBridge).toEqual("[   |");
  });
});
