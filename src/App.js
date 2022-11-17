const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const {Console} = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.start();
    InputView.readBridgeSize(this.bridgeGame.setbridge.bind(this));
    
  }
}

const app = new App();
app.play();

module.exports = App;
