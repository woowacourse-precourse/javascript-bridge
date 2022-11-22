const { Console } = require('@woowacourse/mission-utils');

const { BRIDGE_GAME } = require('./constants/Game');

const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');

const validator = require('./utils/validator');
const errorHandler = require('./utils/errorHandler');
const BridgeRandomNumberGenerator = require('./utils/BridgeRandomNumberGenerator');

class App {
  #size = 0;

  #tryCount = 1;

  #result = false;

  #formatBridge = [[], []];

  setSize(size) {
    validator.validateSize(size);
    this.#size = size;
  }

  play() {
    this.bridgeGame = new BridgeGame();
    errorHandler(() => {
      InputView.readBridgeSize((size) => {
        this.setSize(size);
        this.bridgeGame.setRandomBridge(this.#createRandomBridge());
        this.#gameProcess();
      });
    });
  }

  #gameProcess() {
    errorHandler(() => {
      InputView.readMoving((block) => {
        this.bridgeGame.setUserBlock(block);
        this.#formatBridge = this.bridgeGame.move();
        OutputView.printMap(this.#formatBridge);
        return this.#handleGame();
      });
    });
  }

  #handleGame() {
    const [isFail, isSuccess] = this.bridgeGame.getGameResult(this.#formatBridge);
    if (isFail) return this.#chooseGameAgain();
    if (isSuccess) return this.#exitGame(isSuccess);
    return this.#gameProcess();
  }

  #createRandomBridge() {
    return BridgeMaker.makeBridge(this.#size, BridgeRandomNumberGenerator.generate);
  }

  #chooseGameAgain() {
    errorHandler(() => {
      InputView.readGameCommand((command) => {
        if (BRIDGE_GAME.COMMAND.R === command) {
          return this.#retryGame();
        }
        return this.#exitGame();
      });
    });
  }

  #retryGame() {
    this.#tryCount += 1;
    this.bridgeGame.retry();
    this.#gameProcess();
  }

  #exitGame(isSuccess) {
    this.#result = isSuccess;
    OutputView.printResult(this.#tryCount, this.#result, this.#formatBridge);
    Console.close();
  }
}

module.exports = App;
