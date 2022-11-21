const { INFO_MESSAGE, INPUT_MESSAGE } = require("./Constants");
const InputView = require("./InputView");
const { printMessage } = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeSize;

  gameStart() {
    printMessage(INFO_MESSAGE.start);
    InputView.readBridgeSize(INPUT_MESSAGE.bridgeLength, this.getInput);
  }

  getInput(userInput) {
    this.#bridgeSize = userInput;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
