const { UP, DOWN, CORRECT, WRONG, SPACE } = require('./Constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  constructor() {
    this.step = 0;
    this.upBridge = [];
    this.downBridge = [];
  }

  countStep() {
    this.step += 1;
  }

  correct(userMove) {
    if (userMove === UP) {
      this.upBridge.push(CORRECT);
      this.downBridge.push(SPACE);
    }
    if (userMove === DOWN) {
      this.upBridge.push(SPACE);
      this.downBridge.push(CORRECT);
    }
  }

  wrong(userMove) {
    if (userMove === UP) {
      this.upBridge.push(WRONG);
      this.downBridge.push(SPACE);
    }
    if (userMove === DOWN) {
      this.upBridge.push(SPACE);
      this.downBridge.push(WRONG);
    }
  }

  move(bridge, userMove) {
    if (bridge[this.step] === userMove) {
      this.countStep();
      this.correct(userMove);
      return true;
    }
    if (bridge[this.step] !== userMove) {
      this.wrong(userMove);
      return false;
    }
  }

  getupBridge() {
    return this.upBridge;
  }

  getDownBridge() {
    return this.downBridge;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
