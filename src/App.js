const BridgeGame = require("./BridgeGame");
const InputView = require("./View/InputView");
class App {
  play() {
    const game = new BridgeGame(InputView.readBridgeSize());
    game.start();
  }
}

module.exports = App;
