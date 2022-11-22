const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }
  play() {
    OutputView.printStart();
    this.setBridge();
  }

  setBridge = () => {
    InputView.readBridgeSize((size) => {
      this.bridgeGame.setBridge(size);
    });
  };
}

const app = new App();
app.play();

module.exports = App;