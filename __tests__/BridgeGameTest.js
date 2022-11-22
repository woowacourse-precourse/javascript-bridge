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

  test("checkCorrectOrNot 메서드-1: 참가자 입력 값(U/D)과 실제 정답 비교", () => {
    const gameRec = {
      moveNum: 0,
      attemptNum: 1,
      bridgeAnswer: ["U", "D", "D"],
      inputUOrD: "U",
      bridgeOutput: { firstBridge: "[ O ]", secondBridge: "[   ]" },
    };
    const bridgeGame = new BridgeGame();
    bridgeGame.checkCorrectOrNot(gameRec);
    expect(gameRec.correctOrNot).toEqual("O");
  });

  test("checkCorrectOrNot 메서드-2: 참가자 입력 값(U/D)과 실제 정답 비교", () => {
    const gameRec = {
      moveNum: 0,
      attemptNum: 1,
      bridgeAnswer: ["U", "D", "D"],
      inputUOrD: "D",
      bridgeOutput: { firstBridge: "[ O ]", secondBridge: "[   ]" },
    };
    const bridgeGame = new BridgeGame();
    bridgeGame.checkCorrectOrNot(gameRec);
    expect(gameRec.correctOrNot).toEqual("X");
  });

  test("setBridgeOutput 메서드-1: 다리에 O/X 표시 추가", () => {
    const gameRec = {
      bridgeAnswer: ["U", "D", "D"],
      bridgeOutput: { firstBridge: "[ O |", secondBridge: "[   |" },
      correctOrNot: "O",
      inputUOrD: "U",
    };
    const bridgeGame = new BridgeGame();
    bridgeGame.setBridgeOutput(gameRec);
    expect(gameRec.bridgeOutput.firstBridge).toEqual("[ O | O ]");
    expect(gameRec.bridgeOutput.secondBridge).toEqual("[   |   ]");
  });

  test("setBridgeOutput 메서드-2: 다리에 O/X 표시 추가", () => {
    const gameRec = {
      bridgeAnswer: ["U", "D", "D"],
      bridgeOutput: { firstBridge: "[ O |", secondBridge: "[   |" },
      correctOrNot: "O",
      inputUOrD: "D",
    };
    const bridgeGame = new BridgeGame();
    bridgeGame.setBridgeOutput(gameRec);
    expect(gameRec.bridgeOutput.firstBridge).toEqual("[ O |   ]");
    expect(gameRec.bridgeOutput.secondBridge).toEqual("[   | O ]");
  });

  test("retry 메서드: moveNum 0 초기화, attemptNum 1 증가", () => {
    const gameRec = {
      moveNum: 2,
      attemptNum: 1,
      bridgeAnswer: ["U", "D", "D"],
      bridgeOutput: { firstBridge: "[ O |", secondBridge: "[   |" },
      correctOrNot: "O",
      inputUOrD: "D",
    };
    const bridgeGame = new BridgeGame();
    bridgeGame.retry(gameRec);
    expect(gameRec.moveNum).toEqual(0);
    expect(gameRec.attemptNum).toEqual(2);
  });
});
