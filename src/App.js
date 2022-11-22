const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const Validation = require('./Validation');
const { GAME } = require('./Constants');

class App {
  #bridgeGame;

  play() {
    OutputView.startGame();
    this.#readBridgeSize();
    this.#readMoving();
  }

  #readBridgeSize() {
    const bridgeSize = InputView.readBridgeSize();
    try {
      Validation.isValidBridgeSize(bridgeSize);
      this.#bridgeGame = new BridgeGame(parseInt(bridgeSize));
    } catch (error) {
      OutputView.printError(error.message);
      this.#readBridgeSize();
    }
  }

  #readMoving() {
    const moving = InputView.readMoving();
    try {
      Validation.isValidMoving(moving);
      this.#toMove(moving);
    } catch (error) {
      OutputView.printError(error.message);
      this.#readMoving();
    }
  }

  #toMove(moving) {
    const isCorrect = this.#bridgeGame.move(moving);
    OutputView.printMap(this.#bridgeGame.passedUpperBridgePads);
    OutputView.printMap(this.#bridgeGame.passedLowerBridgePads);
    this.#isCorrectPad(isCorrect);
  }

  #isCorrectPad(Correct) {
    if (Correct) {
      if (this.#bridgeGame.isOver()) {
        this.#printResult(GAME.COMPLETE);
        return;
      }
      this.#readMoving();
      return;
    }
    this.#readGameCommand();
  }

  #readGameCommand() {
    const command = InputView.readGameCommand();
    try {
      Validation.isValidCommand(command);
      const isRetry = this.#bridgeGame.retry(command);
      this.#retry(isRetry);
    } catch (error) {
      OutputView.printError(error.message);
      this.#readGameCommand();
    }
  }

  #printResult(isCompleted) {
    return;
  }

  #retry(isRetry) {
    return;
  }
}

module.exports = App;
