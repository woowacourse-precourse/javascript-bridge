const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  #userGame;

  play() {
    OutputView.printInit();
    this.createBridge();
  }

  createBridge() {
    InputView.readBridgeSize((size) => {
      this.#userGame = new BridgeGame(size);
      this.moveUserBridge();
    });
  }

  moveUserBridge() {
    InputView.readMoving((userMove) => {
      this.#userGame.move(userMove);
    });
    OutputView.printMap(this.#userGame.getCurrentBridge());
    if (!this.#userGame.checkUserPath()) {
      InputView.readGameCommand((input) => this.regame(input));
      return;
    }
    this.checkGameIsFinished();
  }

  regame(input) {
    console.log(input);
    if (input === "R") {
      this.#userGame.retry();
      this.moveUserBridge();
    } else if (input === "Q") {
      OutputView.printResult(this.#userGame);
      return;
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
