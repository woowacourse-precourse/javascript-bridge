const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");

class App {
  async play() {
    const SIZE = await InputView.readBridgeSize();
    const RANDOM_NUMBER_GENERATOR = BridgeRandomNumberGenerator.generate;
    const ANSWER_BRIDGE_ARRAY = BridgeMaker.makeBridge(
      SIZE,
      RANDOM_NUMBER_GENERATOR
    );
    const BRIDGE_GAME = new BridgeGame(ANSWER_BRIDGE_ARRAY);
    BRIDGE_GAME.play();
  }
}

const app = new App();
app.play();
module.exports = App;
