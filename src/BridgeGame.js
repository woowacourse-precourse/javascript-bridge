/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const OutputView = require("./OutputView");
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static #gameCount = 1;
  static _userInputCount = 0;
  move(userInput, bridge) {
    if (BridgeGame._userInputCount === bridge.length) return "finish";
    return bridge[BridgeGame._userInputCount++] === userInput;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    BridgeGame.#gameCount += 1;
    OutputView.upBridge = "[]";
    OutputView.downBridge = "[]";
    OutputView.upCount = 0;
    OutputView.downCount = 0;
    BridgeGame._userInputCount = 0;
  }
}

module.exports = BridgeGame;
