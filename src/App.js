const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printGameStartMsg();
    InputView.readBridgeSize.call(this, this.gameStart);
  }
  gameStart(userInputBridgeLength) {
    const bridgeGame = new BridgeGame(userInputBridgeLength);
  }

  gamese() {

  }
}

const app = new App();
app.play();

module.exports = App;
