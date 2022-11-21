const { printStartingMessage } = require("./OutputView");
const { readBridgeSize } = require("./InputView");
const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");

class App {
  play() {
    printStartingMessage();
    readBridgeSize(this);
  }

  createGame(bridge) {
    const bridgeGame = new BridgeGame(bridge);
    this.runGame(bridgeGame);
  }

  runGame(bridgeGame) {
    InputView.readMoving(this, bridgeGame);
  }

  terminate() {
    Console.close();
  }
}

module.exports = App;
