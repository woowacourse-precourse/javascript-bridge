const { printStartingMessage } = require("./OutputView");
const { readBridgeSize, readGameCommand } = require("./InputView");
const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { readMoving } = require("./InputView");

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
    readMoving(this, bridgeGame);
  }

  askRetry(bridgeGame) {
    readGameCommand(this, bridgeGame);
  }

  terminate() {
    Console.close();
  }
}

module.exports = App;
