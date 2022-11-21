/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #numberOfAttempts;
  #userBridge;

  constructor() {
    this.#bridge = [];
    this.#userBridge = [];
    this.#numberOfAttempts = 1;
  }

  selectMovemomentPosition(input) {
    return this.#userBridge.push(input);
  }

  updateBridge(bridge) {
    return (this.#bridge = bridge);
  }

  isSuccess() {
    if (this.#bridge.length === this.#userBridge.length) return true;
    return false;
  }

  getUserBridge() {
    return this.#userBridge;
  }

  getNumberOfAttempts() {
    return this.#numberOfAttempts;
  }

  move() {
    return this.#userBridge.reduce((trace, position, index) => {
      if (position === this.#bridge[index]) {
        position === 'U' ? trace.push(['O', ' ']) : trace.push([' ', 'O']);
      } else if (position !== this.#bridge[index]) {
        position === 'U' ? trace.push(['X', ' ']) : trace.push([' ', 'X']);
      }
      return trace;
    }, []);
  }

  retry() {
    this.#userBridge = [];
    this.#numberOfAttempts += 1;
  }
}

module.exports = BridgeGame;
