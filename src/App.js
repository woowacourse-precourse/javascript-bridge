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
      const game = new BridgeGame(input);
      this.#game = game;
      this.readMoving();
    } catch {
      this.readBridgeSize();
    }
  }

  moveSpace(input) {
    try {
      Validator.validateSpace(input);
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
      if (input === COMMAND.QUIT) this.endGame();
      else this.retryGame();
    } catch {
      this.readGameCommand();
    }
  }

  checkGameProgress() {
    if (this.#game.isClear()) this.endGame();
    else if (this.#game.isPass()) this.readMoving();
    else this.readGameCommand();
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
