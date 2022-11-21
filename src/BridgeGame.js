/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const { BRIDGE } = require("./Constants/Constants");
const BridgeGameToView = require("./BridgeGameToView");

class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  constructor() {
    this.bridgeGameToView = new BridgeGameToView();
  }

  move(gameRec) {
    // 두 번째 move 이상일 때만 실행: 이전 bridge값 불러온 것에서 마지막 ] 빼고 "| " 추가
    if (gameRec.moveNum !== 0) {
      gameRec.bridgeOutput.firstBridge = `${gameRec.bridgeOutput.firstBridge}${BRIDGE.BAR}`;
      gameRec.bridgeOutput.secondBridge = `${gameRec.bridgeOutput.secondBridge}${BRIDGE.BAR}`;
    }
    this.checkCorrectOrNot(gameRec);
  }

  checkCorrectOrNot(gameRec) {
    let correctOrNot; // 참가자 응답과 실제 정답을 비교한 결과: O 또는 X
    if (gameRec.bridgeAnswer[gameRec.moveNum] === gameRec.inputUOrD) correctOrNot = BRIDGE.CORRECT;
    if (gameRec.bridgeAnswer[gameRec.moveNum] !== gameRec.inputUOrD) correctOrNot = BRIDGE.WRONG;
    gameRec.moveNum += 1;
    gameRec.correctOrNot = correctOrNot; // moveNum, attemptNum, bridgeAnswer, bridgeOutput, inputUOrD, correctOrNot
    this.setBridgeOutput(gameRec);
  }

  setBridgeOutput(gameRec) {
    if (gameRec.inputUOrD === "U") {
      gameRec.bridgeOutput.firstBridge += BRIDGE.SPACE + gameRec.correctOrNot + BRIDGE.SPACE + BRIDGE.RIGHT_BRACKET; // 예. "[ O | " => "[ O | O ]"
      gameRec.bridgeOutput.secondBridge += BRIDGE.THREE_SPACE + BRIDGE.RIGHT_BRACKET; // 예. "[   | " => "[   |   ]"
    } else if (gameRec.inputUOrD === "D") {
      gameRec.bridgeOutput.firstBridge += BRIDGE.THREE_SPACE + BRIDGE.RIGHT_BRACKET;
      gameRec.bridgeOutput.secondBridge += BRIDGE.SPACE + gameRec.correctOrNot + BRIDGE.SPACE + BRIDGE.RIGHT_BRACKET;
    }
    this.bridgeGameToView.bridgeGameToOutputView(gameRec); // BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(gameRec) {
    gameRec.moveNum = 0; // 재시도 시 moveNum 초기화
    gameRec.attemptNum += 1; // 재시도 시 attemptNum 1 증가
    const InputView = require("./InputView");
    InputView.readMoving(gameRec);
  }
}

module.exports = BridgeGame;
