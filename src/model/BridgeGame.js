const { CROSSING_RESULT, DIRECTION } = require('../utils/constants');

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

  selectMovemomentDirection(input) {
    return this.#userBridge.push(input);
  }

  updateBridge(bridge) {
    return (this.#bridge = bridge);
  }

  isSuccess() {
    if (this.#bridge.length === this.#userBridge.length) return true;
    return false;
  }

  getNumberOfAttempts() {
    return this.#numberOfAttempts;
  }

  move() {
    return this.#userBridge.reduce((trace, direction, index) => {
      if (direction === this.#bridge[index]) this.#firstTrace(trace, direction);
      if (direction !== this.#bridge[index]) this.#traceFromSecond(trace, direction);
      return trace;
    }, []);
  }

  #firstTrace(trace, direction) {
    return direction === DIRECTION.up
      ? trace.push([CROSSING_RESULT.success, DIRECTION.nothing])
      : trace.push([DIRECTION.nothing, CROSSING_RESULT.success]);
  }

  #traceFromSecond(trace, direction) {
    return direction === DIRECTION.up
      ? trace.push([CROSSING_RESULT.fail, DIRECTION.nothing])
      : trace.push([DIRECTION.nothing, CROSSING_RESULT.fail]);
  }

  retry() {
    this.#userBridge = [];
    this.#numberOfAttempts += 1;
  }
}

module.exports = BridgeGame;
