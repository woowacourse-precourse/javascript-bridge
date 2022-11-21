const BridgeGame = require("./model/BridgeGame");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const { COMMAND } = require("./constants/input.constants");

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
      try {
        this.game.endValidate(input);
        this.decideCommand(input);
      } catch (err) {
        OutputView.printError(err.message);
        this.gameEndControl();
      }
    });
  }

  decideCommand(command) {
    if (command === COMMAND.RETRY) {
      this.game.retry();
      return;
    }
    this.gameEnd();
  }

  gameEnd() {
    OutputView.printResult();
  }
}

module.exports = App;
