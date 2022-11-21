/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const { BRIDGE } = require("./Constants/Constants");

class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(gameRec) {
    let correctOrNot; // 참가자 응답과 정답을 비교한 결과: O 또는 X
    if (gameRec.bridgeAnswer[gameRec.moveNum] === gameRec.inputUOrD) {
      correctOrNot = BRIDGE.CORRECT;
    } else {
      correctOrNot = BRIDGE.WRONG;
    }
    if (gameRec.moveNum === 0) {
      gameRec.bridgeOutput.firstBridge = BRIDGE.LEFT_BRACKET; // 처음에 "[" 할당
      gameRec.bridgeOutput.secondBridge = BRIDGE.LEFT_BRACKET;
    } else {
      // 첫 move 아닐 때만 실행! (쌓아 나갈 때)
      // 이전 bridge값 불러온 것에서 마지막 ] 빼고 "| " 추가   // 예. "[ O ]" => [ O | "
      gameRec.bridgeOutput.firstBridge = `${gameRec.bridgeOutput.firstBridge.slice(0, -1)}${BRIDGE.BAR}`;
      gameRec.bridgeOutput.secondBridge = `${gameRec.bridgeOutput.secondBridge.slice(0, -1)}${BRIDGE.BAR}`;
    }

    switch (gameRec.inputUOrD) {
      case "U":
        gameRec.bridgeOutput.firstBridge += BRIDGE.SPACE + correctOrNot + BRIDGE.SPACE;
        gameRec.bridgeOutput.secondBridge += BRIDGE.THREE_SPACE;
        break;
      case "D":
        gameRec.bridgeOutput.firstBridge += BRIDGE.THREE_SPACE;
        gameRec.bridgeOutput.secondBridge += BRIDGE.SPACE + correctOrNot + BRIDGE.SPACE;
        break;
      default:
    }

    // 최종 마무리 오른쪽 괄호
    gameRec.bridgeOutput.firstBridge += BRIDGE.RIGHT_BRACKET;
    gameRec.bridgeOutput.secondBridge += BRIDGE.RIGHT_BRACKET;
    gameRec.moveNum += 1;
    gameRec.correctOrNot = correctOrNot; // moveNum, attemptNum, bridgeAnswer, bridgeOutput, inputUOrD, correctOrNot
    OutputView.printMap(gameRec); // BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
