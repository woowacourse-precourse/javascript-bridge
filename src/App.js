const BridgeGame = require("./model/BridgeGame");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  game;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize.bind(this)([this.createGame, this.movePlayer]);
  }

  createGame(input) {
    this.game = new BridgeGame(input);
  }

  movePlayer(direction) {
    const isPossibleMove = this.game.move(direction);
  }
}

module.exports = App;
