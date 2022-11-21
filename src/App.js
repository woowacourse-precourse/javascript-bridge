const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, COMMAND } = require('./constant/Bridge');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');

class App {
  #game;

  play() {
    Console.print(MESSAGE.START);
    this.readBridgeSize();
  }

  makeBridge(input) {
    try {
      Validator.validateBridgeSize(input);
    } catch {
      this.readBridgeSize();
      return;
    }
    const game = new BridgeGame(input);
    this.#game = game;
    this.readMoving();
  }

  moveSpace(input) {
    try {
      Validator.validateSpace(input);
    } catch {
      this.readMoving();
      return;
    }
    this.#game.move(input);
    const map = this.#game.getMap();
    OutputView.printMap(map);
    this.checkGameProgress();
  }

  selectRetryOrQuit(input) {
    try {
      Validator.validateCommand(input);
    } catch {
      this.readGameCommand();
      return;
    }
    if (input === COMMAND.QUIT) this.endGame();
    else this.retryGame();
  }

  checkGameProgress() {
    if (!this.#game.isPass()) {
      this.readGameCommand();
      return;
    }
    if (this.#game.isClear()) {
      this.endGame();
      return;
    }
    this.readMoving();
  }

  endGame() {
    const map = this.#game.getMap();
    const tryCount = this.#game.getTryCount();
    OutputView.printResult(map, MESSAGE.SUCCESS, tryCount);
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
