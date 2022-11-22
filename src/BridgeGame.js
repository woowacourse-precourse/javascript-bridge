const OutputView = require('./OutputView');
const { MOVING } = require('./constants/index');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #movingRoute;
  #UserTryCount;

  constructor() {
    this.#bridge = [];
    this.#movingRoute = { upper: [], lower: [] };
    this.#UserTryCount = 1;
  }

  prepare(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(
      parseInt(bridgeSize, 10),
      BridgeRandomNumberGenerator.generate
    );
    this.#bridge = bridge;
  }

  move(movingCommand) {
    const movingRouteIndex = this.#movingRoute.upper.length;

    if (movingCommand === MOVING.UPPER) {
      return this.moveToUpper(movingCommand, movingRouteIndex);
    } else {
      return this.moveToLower(movingCommand, movingRouteIndex);
    }
  }

  moveToUpper(movingCommand, movingRouteIndex) {
    if (movingCommand === this.#bridge[movingRouteIndex]) {
      this.#movingRoute.upper.push(MOVING.RIGHT_ANSWER);
      this.#movingRoute.lower.push(MOVING.SPACE);
    } else {
      this.#movingRoute.upper.push(MOVING.WRONG_ANSWER);
      this.#movingRoute.lower.push(MOVING.SPACE);
    }
    return this.print();
  }

  moveToLower(movingCommand, movingRouteIndex) {
    if (movingCommand === this.#bridge[movingRouteIndex]) {
      this.#movingRoute.lower.push(MOVING.RIGHT_ANSWER);
      this.#movingRoute.upper.push(MOVING.SPACE);
    } else {
      this.#movingRoute.lower.push(MOVING.WRONG_ANSWER);
      this.#movingRoute.upper.push(MOVING.SPACE);
    }
    return this.print();
  }

  hasWrongAnswer() {
    const movingItems = Object.values(this.#movingRoute).flat();
    const result = movingItems.includes(MOVING.WRONG_ANSWER);
    return result;
  }

  /**
   */
  hasAllAnswer() {
    const result = this.#movingRoute.upper.length === this.#bridge.length;
    return result;
  }

  retry() {
    this.#movingRoute = { upper: [], lower: [] };
    this.#UserTryCount += 1;
  }

  finish(gameReult) {
    OutputView.printResult(gameReult, this.#movingRoute, this.#UserTryCount);
  }

  print() {
    return OutputView.printMap(this.#movingRoute);
  }
}

module.exports = BridgeGame;
