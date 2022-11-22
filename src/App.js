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
      const bridge = BridgeMaker.makeBridge(
        size,
        BridgeRandomNumberGenerator.generate
      );
      this.bridgeGame.setBridge(bridge);
      console.log(this.bridgeGame.bridge);
    });
  };
}

const app = new App();
app.play();

module.exports = App;