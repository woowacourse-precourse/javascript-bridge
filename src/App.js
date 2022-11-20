const InputView = require("./InputView.js");
const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker.js");
const BridgeGame = require("./BridgeGame.js");
const OutputView = require("./OutputView.js");
class App {
  play() {
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }
}

const app = new App();
app.play();

module.exports = App;
