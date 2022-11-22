const { checkSide } = require('./util/Validation');
const BridgeJudge = require('./util/BridgeJudge');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #commands = [];

  constructor(bridge) {
    this.bridge = bridge;
    this.count = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(command) {
    this.#commands.push(command);
  }

  judgmentCommand() {
    const currentResult = BridgeJudge(this.bridge, this.#commands);
    return currentResult;
  }

  validMoveCommand(command) {
    if (checkSide(command)) {
      return true;
    }
    return false;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  retry() {
    this.plusTryCount();
    this.#commands = [];
  }

  getTryCount() {
    return this.count;
  }

  plusTryCount() {
    this.count += 1;
  }
}

module.exports = BridgeGame;
