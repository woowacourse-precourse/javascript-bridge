const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  #SIZE;
  play() {
    return InputView.readBridgeSize(this.answerBridge);
  }

  answerBridge(size) {
    const RANDOM_NUMBER_GENERATOR = BridgeRandomNumberGenerator.generate;
    const ANSWER_BRIDGE_ARRAY = BridgeMaker.makeBridge(
      size,
      RANDOM_NUMBER_GENERATOR
    );
    const BRIDGE_GAME = new BridgeGame(ANSWER_BRIDGE_ARRAY);
    return BRIDGE_GAME.move();
    // return this.start(ANSWER_BRIDGE_ARRAY);
  }

  start(ANSWER_BRIDGE_ARRAY) {}
}

const app = new App();
app.play();
module.exports = App;
