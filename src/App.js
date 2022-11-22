const BridgeGame = require("./model/BridgeGame");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const { COMMAND } = require("./constants/input.constants");
const Validator = require("./Validator");

class App {
  game;

  play() {
    OutputView.printStart();
    this.inputBridgeSize();
  }

  createGame(input) {
    this.game = new BridgeGame(input);
  }

  readBridgeCallback = (size) => {
    try {
      this.createGame(size);
      this.movePlayer();
    } catch (err) {
      OutputView.printError(err.message);
      this.inputBridgeSize();
    }
  };

  movePlayerCallback = (direction) => {
    try {
      const isPossible = this.game.move(direction);
      const isEnd = this.game.isEnd();
      this.decideNextAction(isEnd, isPossible);
    } catch (err) {
      OutputView.printError(err.message);
      this.movePlayer();
    }
  };

  gameEndControlCallback = (input) => {
    try {
      Validator.endValidate(input);
      this.decideCommand(input);
    } catch (err) {
      OutputView.printError(err.message);
      this.gameEndControl();
    }
  };

  inputBridgeSize() {
    InputView.readBridgeSize(this.readBridgeCallback);
  }

  movePlayer() {
    InputView.readMoving(this.movePlayerCallback);
  }

  gameEndControl() {
    InputView.readGameCommand(this.gameEndControlCallback);
  }

  decideNextAction(isEnd, isPossible) {
    if (!isEnd && isPossible) this.movePlayer();
    if (!isPossible) this.gameEndControl();
    if (isEnd && isPossible) this.gameEnd(true);
  }

  decideCommand(command) {
    if (command === COMMAND.RETRY) {
      this.game.retry();
      this.movePlayer();
      return;
    }
    this.gameEnd(false);
  }

  gameEnd(isSuccess) {
    const { gameResult, tryNum } = this.game;
    OutputView.printResult(gameResult.result, isSuccess, tryNum);
    InputView.close();
  }
}

module.exports = App;
