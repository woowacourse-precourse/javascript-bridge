const {
  BRIDGE: { STRING_UP, STRING_DOWN, SUCCESS, FAIL, BLANK },
} = require('./constant/constant');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.up = [];
    this.down = [];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge, moving, index) {
    if (moving === STRING_UP) {
      bridge[index] === STRING_UP ? this.up.push(SUCCESS) : this.up.push(FAIL);
      this.down.push(BLANK);
      return;
    }

    bridge[index] === STRING_DOWN ? this.down.push(SUCCESS) : this.down.push(FAIL);
    this.up.push(BLANK);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  getMoving() {
    return { up: this.up, down: this.down };
  }
}

module.exports = BridgeGame;
