const GAME_SETTING = require('../constants/Setting');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  upper = [];
  lower = [];
  move(chooseBlock, rightBlock) {
    if (chooseBlock === rightBlock) {
      this.passData(chooseBlock);
      return [true, this.upper, this.lower];
    }
    if (chooseBlock !== rightBlock) {
      this.failData(chooseBlock);
      return [false, this.upper, this.lower];
    }
  }
  passData(chooseBlock) {
    if (chooseBlock === GAME_SETTING.up) {
      this.upper.push(GAME_SETTING.correct);
      this.lower.push(GAME_SETTING.blank);
    }
    if (chooseBlock === GAME_SETTING.dowm) {
      this.upper.push(GAME_SETTING.blank);
      this.lower.push(GAME_SETTING.correct);
    }
  }
  failData(chooseBlock) {
    if (chooseBlock === GAME_SETTING.up) {
      this.upper.push(GAME_SETTING.wrong);
      this.lower.push(GAME_SETTING.blank);
    }
    if (chooseBlock === GAME_SETTING.dowm) {
      this.upper.push(GAME_SETTING.blank);
      this.lower.push(GAME_SETTING.wrong);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.upper = [];
    this.lower = [];
  }
}

module.exports = BridgeGame;
