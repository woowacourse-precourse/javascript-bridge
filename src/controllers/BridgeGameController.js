const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const { Console } = require('@woowacourse/mission-utils');
const InputValidator = require('../utils/InputValidator');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { BRIDGE, GAME } = require('../utils/constants');

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
    const { bridgeMap, checking } = this.#bridgeGame.move(moving);
    this.printMap({ bridgeMap, checking });
  }

  printMap({ bridgeMap, checking }) {
    OutputView.printMap(bridgeMap);
    const isRight = checking === BRIDGE.RIGHT;
    if (isRight) return this.readMoving();
    this.readGameCommand();
  }

  readGameCommand() {
    const onReadGameCommand = (gameCommand) => {
      try {
        InputValidator.isValidGameCommand(gameCommand);
        this.excuteGameCommand(gameCommand);
      } catch (err) {
        Console.print(err.message);
        this.readGameCommand();
      }
    };
    InputView.readGameCommand(onReadGameCommand);
  }

  excuteGameCommand(gameCommand) {}
}

module.exports = BridgeGameController;
