const { BRIDGE_INFO, BRIDGE_UI } = require('./constants/BridgeGameSetting');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(bridge) {
    this.input = bridge;
    this.resultBridge = { upper: [], lower: [] };
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(count, move) {
    if (this.input[count] === move) {
      this.correct(move);
      return true;
    }
    if (this.input[count] !== move) {
      this.wrong(move);
      return false;
    }
  }

  correct(move) {
    if (move === BRIDGE_INFO.SELECT_UP) {
      this.resultBridge.upper.push(BRIDGE_UI.RIGHT_ANSWER);
      this.resultBridge.lower.push(' ');
    }
    if (move === BRIDGE_INFO.SELECT_DOWN) {
      this.resultBridge.lower.push(BRIDGE_UI.RIGHT_ANSWER);
      this.resultBridge.upper.push(' ');
    }
  }

  wrong(move) {
    if (move === BRIDGE_INFO.SELECT_UP) {
      this.resultBridge.upper.push(BRIDGE_UI.WRONG_ANSWER);
      this.resultBridge.lower.push(' ');
    }
    if (move === BRIDGE_INFO.SELECT_DOWN) {
      this.resultBridge.lower.push(BRIDGE_UI.WRONG_ANSWER);
      this.resultBridge.upper.push(' ');
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.resultBridge = { upper: [], lower: [] };
  }
}

module.exports = BridgeGame;
