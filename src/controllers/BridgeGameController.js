const BridgeGame = require('../BridgeGame');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const InputValidator = require('../utils/InputValidator');
const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE, GAME } = require('../utils/constants');

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
        this.createBridge(parseInt(bridgeSize));
      } catch (err) {
        OutputView.printError(err.message);
        this.readBridgeSize();
      }
    };
    InputView.readBridgeSize(onReadBridgeSize);
  }

  createBridge(bridgeSize) {
    this.#bridgeGame.createBridge(bridgeSize);
    this.readMoving();
  }

  readMoving() {
    const onReadMoving = (moving) => {
      try {
        InputValidator.isValidMoving(moving);
        this.move(moving);
      } catch (err) {
        OutputView.printError(err.message);
        this.readMoving();
      }
    };
    InputView.readMoving(onReadMoving);
  }

  move(moving) {
    const { bridgeMap, isSuccess, checking } = this.#bridgeGame.move(moving);
    this.printMap({ bridgeMap, isSuccess, checking });
  }

  printMap({ bridgeMap, isSuccess, checking }) {
    OutputView.printMap(bridgeMap);
    this.checkNextStep({ isSuccess, checking });
  }

  checkNextStep({ isSuccess, checking }) {
    if (isSuccess) return this.quit();
    const isRight = checking === BRIDGE.right;
    if (isRight) return this.readMoving();
    this.readGameCommand();
  }

  readGameCommand() {
    const onReadGameCommand = (gameCommand) => {
      try {
        InputValidator.isValidGameCommand(gameCommand);
        this.excuteGameCommand(gameCommand);
      } catch (err) {
        OutputView.printError(err.message);
        this.readGameCommand();
      }
    };
    InputView.readGameCommand(onReadGameCommand);
  }

  excuteGameCommand(gameCommand) {
    const isRetry = gameCommand === GAME.retry;
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
