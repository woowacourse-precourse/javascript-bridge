const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const { Console } = require('@woowacourse/mission-utils');
const InputValidator = require('../utils/InputValidator');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class BridgeGameController {
  #bridgeGame;
  constructor(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  start() {
    OutputView.printStart();
    this.readBridgeSize();
  }

  readBridgeSize() {
    const onReadBridgeSize = (bridgeSize) => {
      try {
        InputValidator.isValidBridgeSize(bridgeSize);
        this.makeBridgePattern(bridgeSize);
      } catch (err) {
        Console.print(err.message);
        this.readBridgeSize();
      }
    };
    InputView.readBridgeSize(onReadBridgeSize);
  }

  makeBridgePattern(bridgeSize) {
    const bridgePattern = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.createBridge(bridgeSize, [...bridgePattern]);
  }

  createBridge(bridgeSize, bridgePattern) {
    this.#bridgeGame.createBridge(bridgeSize, bridgePattern);
    this.readMoving();
  }

  readMoving() {
    const onReadMoving = (moving) => {
      try {
        InputValidator.isValidMoving(moving);
        this.move(moving);
      } catch (err) {
        Console.print(err.message);
        this.readMoving();
      }
    };
    InputView.readMoving(onReadMoving);
  }

  move(moving) {
    const bridgeMap = this.#bridgeGame.move(moving);
    this.printMap(bridgeMap);
  }

  printMap(bridgeMap) {
    OutputView.printMap(bridgeMap);
  }
}

module.exports = BridgeGameController;
