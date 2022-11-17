const Bridgemaker = require('./Bridgemaker.js');
const { RETRY } = require('./config.js');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridge = Bridgemaker.makeBridge();
    this.history = [];
    this.curPosition = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} move 사용자가 입력한 이동 방향
   * @returns {boolean} 이동 성공 여부
   */
  move(moveType) {
    const curPosType = this.bridge[this.curPosition];
    this.curPosition += 1;

    if (curPosType === moveType) this.history.push(true);
    else this.history.push(false);

    return this.history[this.history.length - 1];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * @param {string} restart 사용자가 입력한 재시작 여부
   * @returns {boolean} 게임 재시작 여부
   */
  retry(retryType) {
    if (retryType === RETRY.YES) {
      this.history = [];
      this.curPosition = 0;
      return true;
    } else return false;
  }
}

module.exports = BridgeGame;
