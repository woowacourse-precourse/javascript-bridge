const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");


class App {
  play() {
    OutputView.printGameStart();
    const BridgeGame = new BridgeGame();
    this.prepareGame(BridgeGame);
  }

  prepareGame(BridgeGame) {
    this.inputBridgeSize(BridgeGame);
    this.setBridge(BridgeGame);
  }

  inputBridgeSize(BridgeGame) {
    InputView.readBridgeSize(BridgeGame);
  }

  setBridge(BridgeGame) {
    BridgeGame.setBridge();
  }
}

module.exports = App;
