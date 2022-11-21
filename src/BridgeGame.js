const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #tryCount;
  #history;
  constructor() {
    this.#bridge = null;
    this.#tryCount = 1;
    this.#history = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(player) {
    if (this.checkMove(player)) return this.checkEnd();
    return false;
  }

  checkEnd() {
    if (this.#bridge.length == this.#history.length) return 'END';
    return true;
  }

  checkMove(player) {
    if (player == 'U' && this.#bridge[this.#history.length] == 'U') {
      this.#history.push([player, true]);
      return true;
    }
    if (player == 'D' && this.#bridge[this.#history.length] == 'D') {
      this.#history.push([player, true]);
      return true;
    }
    this.#history.push([player, false]);
    return false;
  }

  setBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  getTry() {
    return this.#tryCount;
  }

  getHistory() {
    return this.#history;
  }

  getResult() {
    const bridgeLength = this.#bridge.length;
    const historyLength = this.#history.length;
    if (bridgeLength == historyLength && this.#history[historyLength - 1][1] == true) {
      return '성공';
    }
    return '실패';
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
