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
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(input) {
    try {
      Validator.validateBridgeSize(input);
    } catch {
      InputView.readBridgeSize(this.makeBridge.bind(this));
      return;
    }
    const game = new BridgeGame(input);
    this.#game = game;
    InputView.readMoving(this.moveSpace.bind(this));
  }

  moveSpace(input) {
    try {
      Validator.validateSpace(input);
    } catch {
      InputView.readMoving(this.moveSpace.bind(this));
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
      InputView.readGameCommand(this.selectRetryOrQuit.bind(this));
      return;
    }
    if (input === COMMAND.QUIT) this.endGame();
    else this.retryGame();
  }

  checkGameProgress() {
    if (!this.#game.isPass()) {
      InputView.readGameCommand(this.selectRetryOrQuit.bind(this));
      return;
    }
    if (this.#game.isClear()) {
      this.endGame();
      return;
    }
    InputView.readMoving(this.moveSpace.bind(this));
  }

  endGame() {
    const map = this.#game.getMap();
    const tryCount = this.#game.getTryCount();
    OutputView.printResult(map, MESSAGE.SUCCESS, tryCount);
    Console.close();
  }

  retryGame() {
    this.#game.retry();
    InputView.readMoving(this.moveSpace.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
