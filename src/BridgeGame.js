const OutputView = require('./OutputView');
const { MOVING } = require('./constants/index');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const { Console } = require('@woowacourse/mission-utils');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #movingRoute;
  #UserTryCount;

  constructor() {
    this.#bridge = [];
    this.#movingRoute = [[], []];
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
    const movingRouteIndex = this.#movingRoute[0].length;

    if (movingCommand === MOVING.UPPER) {
      return this.moveToUpper(movingCommand, movingRouteIndex);
    } else {
      return this.moveToLower(movingCommand, movingRouteIndex);
    }
  }

  moveToUpper(movingCommand, movingRouteIndex) {
    if (movingCommand === this.#bridge[movingRouteIndex]) {
      this.#movingRoute[0].push(MOVING.RIGHT_ANSWER);
      this.#movingRoute[1].push(MOVING.SPACE);
    } else {
      this.#movingRoute[0].push(MOVING.WRONG_ANSWER);
      this.#movingRoute[1].push(MOVING.SPACE);
    }
    OutputView.printMap(this.#movingRoute);
    return this.#movingRoute;
  }

  moveToLower(movingCommand, movingRouteIndex) {
    if (movingCommand === this.#bridge[movingRouteIndex]) {
      this.#movingRoute[1].push(MOVING.RIGHT_ANSWER);
      this.#movingRoute[0].push(MOVING.SPACE);
    } else {
      this.#movingRoute[1].push(MOVING.WRONG_ANSWER);
      this.#movingRoute[0].push(MOVING.SPACE);
    }
    OutputView.printMap(this.#movingRoute);
    return this.#movingRoute;
  }

  retry() {
    this.#movingRoute = [[], []];
    this.#UserTryCount += 1;
  }

  finish(gameReult) {
    OutputView.printResult(gameReult, this.#movingRoute, this.#UserTryCount);
  }
}

module.exports = BridgeGame;
