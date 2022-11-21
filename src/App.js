const BridgeGame = require("./model/BridgeGame");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  game;

  play() {
    OutputView.printStart();
    this.inputBridgeSize();
  }

  createGame(input) {
    this.game = new BridgeGame(input);
  }

  inputBridgeSize() {
    InputView.readBridgeSize((size) => {
      try {
        this.createGame(size);
        this.movePlayer();
      } catch (err) {
        OutputView.printError(err.message);
        this.inputBridgeSize();
      }
    });
  }

  movePlayer() {
    InputView.readMoving((direction) => {
      try {
        const isPossible = this.game.move(direction);
        const isEnd = this.game.isEnd();
        if (!isEnd && isPossible) this.movePlayer();
        if (!isPossible) this.gameEndControl();
      } catch (err) {
        OutputView.printError(err.message);
        this.movePlayer();
      }
    });
  }

  gameEndControl() {
    InputView.readGameCommand((input) => {
      this.game.endValidate(input);
    });
  }
}

module.exports = App;
