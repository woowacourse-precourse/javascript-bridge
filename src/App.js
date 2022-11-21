const BridgeGame = require("./model/BridgeGame");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  game;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize.bind(this)(this.createGame);
  }

  createGame(input) {
    this.game = new BridgeGame(input);
  }
}

module.exports = App;
