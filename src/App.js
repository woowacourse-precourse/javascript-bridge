const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const Validation = require("./utils/Validation");

class App {
  #userGame;

  play() {
    OutputView.printInit();
    this.createBridge();
  }

  createBridge() {
    InputView.readBridgeSize((size) => {
      try {
        Validation.validateBridgeSize(size);
        this.#userGame = new BridgeGame(size);
        this.moveUserBridge();
      } catch (e) {
        OutputView.printError(e);
        this.createBridge();
      }
    });
  }

  moveUserBridge() {
    InputView.readMoving((userMove) => {
      this.#userGame.move(userMove);
    });
    OutputView.printMap(this.#userGame.getCurrentBridge());
    this.gameover();
  }

  gameover() {
    if (!this.#userGame.checkUserPath()) {
      InputView.readGameCommand((input) => this.regame(input));
      return;
    }
    this.checkGameIsFinished();
  }

  regame(input) {
    try {
      Validation.validateUserInput(input);
      if (input === "R") {
        this.#userGame.retry();
        this.moveUserBridge();
      } else if (input === "Q") {
        OutputView.printResult(this.#userGame);
        return;
      }
    } catch (e) {
      OutputView.printError(e);
      this.gameover();
    }
  }

  checkGameIsFinished() {
    if (this.#userGame.getFinish()) {
      OutputView.printResult(this.#userGame);
      return;
    }
    this.moveUserBridge();
  }
}

module.exports = App;
