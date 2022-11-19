const InputView = require('./InputView');
const { Console } = require('@woowacourse/mission-utils');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #user;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#user = [];
  }

  move(move) {
    const current = this.#user.length;
    if (this.#bridge[current] === move) {
      this.#user.push(move);
    }
  }

  isEnd(move) {
    const current = this.#user.length;
    if (this.#bridge[current] !== move) return true;
    return false;
  }

  retry() {
    this.#user = [];
  }
}

module.exports = BridgeGame;
