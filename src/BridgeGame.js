const ConstValue = require('./ConstValue');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridge;
  tryCount;
  constructor(bridge) {
    this.bridge = bridge;
    this.tryCount = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveDirection) {
    this.handleMoveDirectionException(moveDirection);
    if (this.bridge[this.tryCount] === moveDirection) {
      this.tryCount += 1;
      return true;
    }

    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    this.tryCount += 1;

    return true;
  }

  handleMoveDirectionException(moveDirection) {
    let count = 0;
    if (moveDirection === 'U') {
      count += 1;
    }

    if (moveDirection === 'D') {
      count += 1;
    }

    if (count === 0) {
      throw new Error(ConstValue.MOVE_DIRECTION_EXCEPTION_ERROR_MESSAGE);
    }
  }

  checkSuccess() {
    if (this.bridge.length === this.tryCount) {
      return true;
    }

    return false;
  }
}
module.exports = BridgeGame;
