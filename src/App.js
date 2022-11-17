const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");

class App {
  async play() {
    const BRIDGE_SIZE = await InputView.readBridgeSize();
    const Game = new BridgeGame(BRIDGE_SIZE);

    Game.move();
  }
}

const appli = new App();
appli.play();
module.exports = App;
