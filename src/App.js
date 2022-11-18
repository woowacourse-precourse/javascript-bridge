const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame.js');
const InputView = require('./InputView.js');
const Validation = require('./Validation.js');

class App {
  #bridgeGame;

  play() {
    this.initBridgeGame();
  }

  initBridgeGame() {
    try {
      const bridgeSize = InputView.readBridgeSize();
      Validation.validateBridgeSize(bridgeSize);
      this.#bridgeGame = new BridgeGame(bridgeSize);
      this.playBridgeGame();
    } catch (err) {
      Console.print(err);
      this.initBridgeGame();
    }
  }

  playBridgeGame() {}

  checkBridgeGame() {}

  requestRetryBridgeGame() {}

  retryBridgeGame() {}

  endBridgeGame() {}
}

module.exports = App;
