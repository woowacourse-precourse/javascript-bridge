const InputView = require("./InputView.js");
const BridgeGame = require("./BridgeGame.js");
class App {
  play() {
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }
}

const app = new App();
app.play();

module.exports = App;
