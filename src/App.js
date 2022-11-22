const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { Console } = require("@woowacourse/mission-utils");
const Bridge = require("./Bridge");
const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const bridge = new Bridge();
    const bridgeGame = new BridgeGame();

    OutputView.start();
    InputView.readBridgeSize(bridge,bridgeGame);
  }
}

module.exports = App;
// const app = new App();
// app.play();

