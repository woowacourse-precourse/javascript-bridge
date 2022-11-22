const BridgeGame = require("./BridgeGame");
const InputView = require("./View/InputView");
const Controller = require("./Controller");
class App {
  play() {
    const game = new BridgeGame(InputView.readBridgeSize());
    const control = new Controller(game);
    control.start();
  }
}

module.exports = App;
