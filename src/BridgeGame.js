const { INPUT_QUESTION } = require("./utils/Constants");
const InputView = require("./InputView");
const Validation = require("./Validation");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge

  set() {
    InputView.readBridgeSize(INPUT_QUESTION.bridgeLen, (bridgeLength) => {
      Validation.checkBridgeLength(bridgeLength);
      const bridge = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
      this.#bridge = bridge;
      this.move();
    });
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    InputView.readMoving('이동할 칸을 선택해주세요.', (space) => {

    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
