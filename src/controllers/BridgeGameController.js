const BridgeGame = require('../BridgeGame');
const BridgeMaker = require('../BridgeMaker');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const InputValidator = require('../utils/InputValidator');
const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE, GAME } = require('../utils/constants');
const { generate } = require('../BridgeRandomNumberGenerator');

class BridgeGameController {
  #bridgeGame = new BridgeGame();

  start() {
    OutputView.printStart();
    this.readBridgeSize();
  }

  readBridgeSize() {
    const onReadBridgeSize = (bridgeSize) => {
      try {
        InputValidator.isValidBridgeSize(bridgeSize);
        this.makeBridgePattern(parseInt(bridgeSize));
      } catch (err) {
        Console.print(err.message);
        this.readBridgeSize();
      }
    };
    InputView.readBridgeSize(onReadBridgeSize);
  }

  makeBridgePattern(bridgeSize) {
    const bridgePattern = BridgeMaker.makeBridge(bridgeSize, generate);
    this.createBridge([...bridgePattern]);
  }

  createBridge(bridgePattern) {
    this.#bridgeGame.createBridge(bridgePattern);
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
    const { bridgeMap, checking, isSuccess } = this.#bridgeGame.move(moving);
    this.printMap({ bridgeMap, checking, isSuccess });
  }

  printMap({ bridgeMap, checking, isSuccess }) {
    OutputView.printMap(bridgeMap);
    if (isSuccess) return this.quit();
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

  excuteGameCommand(gameCommand) {
    const isRetry = gameCommand === GAME.RETRY;
    if (isRetry) {
      this.#bridgeGame.retry();
      return this.readMoving();
    }
    return this.quit();
  }

  quit() {
    const { bridgeMap, isSuccess, tryCount } = this.#bridgeGame.quit();
    OutputView.printResult({ bridgeMap, isSuccess, tryCount });
    Console.close();
  }
}

module.exports = BridgeGameController;
