const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, COMMAND } = require('./constant/Bridge');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');

class App {
  #game;

  play() {
    OutputView.printStartMessage();
    this.readBridgeSize();
  }

  makeBridge(input) {
    try {
      const game = new BridgeGame(input);
      this.#game = game;
      this.readMoving();
    } catch {
      this.readBridgeSize();
    }
  }

  moveSpace(input) {
    try {
      this.#game.move(input);
      const map = this.#game.getMap();
      OutputView.printMap(map);
      this.checkGameProgress();
    } catch {
      this.readMoving();
    }
  }

  selectRetryOrQuit(input) {
    try {
      Validator.validateCommand(input);
      if (input === COMMAND.QUIT) this.endGame(MESSAGE.FAIL);
      else this.retryGame();
    } catch {
      this.readGameCommand();
    }
  }

  checkGameProgress() {
    if (this.#game.isClear()) this.endGame(MESSAGE.SUCCESS);
    else if (this.#game.isPass()) this.readMoving();
    else this.readGameCommand();
  }

  endGame(gameResult) {
    const map = this.#game.getMap();
    const tryCount = this.#game.getTryCount();
    OutputView.printResult(map, gameResult, tryCount);
    Console.close();
  }

  retryGame() {
    this.#game.retry();
    this.readMoving();
  }

  readBridgeSize() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  readMoving() {
    InputView.readMoving(this.moveSpace.bind(this));
  }

  readGameCommand() {
    InputView.readGameCommand(this.selectRetryOrQuit.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
