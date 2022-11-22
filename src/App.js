const { Console } = require('@woowacourse/mission-utils');

const { BRIDGE_GAME } = require('./constants/Game');

const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./utils/BridgeRandomNumberGenerator');

class App {
  #size = 0;

  #tryCount = 1;

  #result = false;

  #formatBridge = [[], []];

  async play() {
    this.bridgeGame = new BridgeGame();
    this.#size = await InputView.readBridgeSize();
    this.bridgeGame.setRandomBridge(this.#createRandomBridge());
    this.#gameProcess();
  }

  async #gameProcess() {
    this.bridgeGame.setUserBlock(await InputView.readMoving());
    this.#formatBridge = this.bridgeGame.move();
    OutputView.printMap(this.#formatBridge);

    return this.#handleGame();
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

  async #chooseGameAgain() {
    const command = await InputView.readGameCommand();
    if (BRIDGE_GAME.COMMAND.Q === command) {
      this.#exitGame();
    } else {
      this.#retryGame();
      this.#gameProcess();
    }
  }

  #retryGame() {
    this.#tryCount += 1;
    this.bridgeGame.retry();
  }

  #exitGame(isSuccess) {
    this.#result = isSuccess;
    OutputView.printResult(this.#tryCount, this.#result, this.#formatBridge);
    Console.close();
  }
}

module.exports = App;
