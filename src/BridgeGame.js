const { printMap, printResult } = require('./OutputView');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #user;
  #round;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#user = [];
    this.#round = 1;
  }

  move(move) {
    this.#user.push(move);
    printMap(this.#bridge, this.#user);
  }

  isEnd() {
    return this.#user.length === this.#bridge.length;
  }

  isFail() {
    const current = this.#user.length - 1;
    if (this.#bridge[current] !== this.#user[current]) return true;
    return false;
  }

  end() {
    const gameResult = this.isFail() ? '실패' : '성공';
    printResult(this.#bridge, this.#user, this.#round, gameResult);
  }

  retry() {
    this.#user = [];
    this.#round += 1;
  }
}

module.exports = BridgeGame;
