const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const BridgeSizeValidator = require('./validator/BridgeSizeValidator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  #bridgeSize;
  constructor() {}

  start() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.validateBridgeSize.bind(this));
  }

  validateBridgeSize(bridgeSize) {
    try {
      new BridgeSizeValidator(bridgeSize);
      this.#bridgeSize = bridgeSize;
    } catch (error) {
      Console.print(error);
      this.inputBridgeSize();
    }
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
