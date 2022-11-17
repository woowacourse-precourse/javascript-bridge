const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");

class App {
  async play() {
    const BRIDGE_SIZE = await InputView.readBridgeSize();
    const game = new BridgeGame(BRIDGE_SIZE);
  }
}

const appli = new App();
appli.play();
module.exports = App;
