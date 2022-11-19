const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Bridge = require('../domain/Bridge');
const MovingCount = require('../domain/MovingCount');
const CurrentLocation = require('../domain/CurrentLocation');
const { GAME } = require('../constants/Constants');
const { Console } = require('@woowacourse/mission-utils');

class BridgeGame {
  #bridge;
  #totalMovingCount;
  #currentLocation;
  #partialBridgeMap;
  #result;

  constructor() {
    this.#bridge;
    this.#totalMovingCount = new MovingCount();
    this.#currentLocation = new CurrentLocation();
    this.#partialBridgeMap;
    OutputView.printStart();
  }

  start() {
    try {
      InputView.readBridgeLength(this.#initBridge.bind(this));
    } catch (err) {
      Console.print(err);
      this.start();
    }
  }

  #initBridge(length) {
    this.#bridge = new Bridge(length);
    this.#move();
  }

  #move() {
    this.#isEndOfBridge()
      ? this.#end()
      : InputView.readMoving(this.#moveResult.bind(this));
  }

  #moveResult(direction) {
    this.#currentLocation.moveOneStep();
    const location = this.#currentLocation.getCurrentLocation();

    this.#result = this.#bridge.isMovable(direction, location);
    this.#partialBridgeMap = this.#bridge.getPartialBridgeMap(location);

    OutputView.printMap(this.#partialBridgeMap, this.#result);

    this.#result
      ? this.#move()
      : InputView.readGameCommand(this.#isRetry.bind(this));
  }

  #isRetry(gameCommand) {
    this.#totalMovingCount.plusTotalMovingCount();
    if (gameCommand === GAME.restart) {
      this.#currentLocation.resetCurrentLocation();
      this.#move();
    }
    if (gameCommand === GAME.quit) this.#end();
  }

  #end() {
    this.#totalMovingCount.plusTotalMovingCount();
    OutputView.printResult(
      this.#partialBridgeMap,
      this.#result,
      this.#totalMovingCount.getTotalMovingCount()
    );
    Console.close();
  }

  #isEndOfBridge() {
    return (
      this.#bridge.getBridgeLength() ===
      this.#currentLocation.getCurrentLocation() + 1
    );
  }
}

module.exports = BridgeGame;
