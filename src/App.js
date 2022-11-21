const BridgeGame = require("./model/BridgeGame");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  game;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize((size) => {
      this.createGame(size);
      this.movePlayer();
    });
  }

  createGame(input) {
    this.game = new BridgeGame(input);
  }

  movePlayer() {
    InputView.readMoving((direction) => {
      const isPossible = this.game.move(direction);
      const isEnd = this.game.isEnd();
      if (!isEnd && isPossible) this.movePlayer();
      if (!isPossible) this.gameEndControl();
    });
  }

  gameEndControl() {
    InputView.readGameCommand((input) => {
      this.game.endValidate(input);
    });
  }
}

module.exports = App;
