const BridgeGame = require('./BridgeGame');
const Validation = require('./Validation');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const GameMessage = require('./constants/GameMessage');

class App {
  /** @type {BridgeGame} */
  #BridgeGame = new BridgeGame();

  /**
   * @param {string} input
   */
  #getMoveDirection(input) {
    Validation.Game(input, 'DIRECTION');

    this.#BridgeGame.move(input);
  }

  /**
   * @param {string} input
   */
  #getBridgeSize(input) {
    Validation.Bridge(input);

    const bridgeSize = Number(input);
    this.#BridgeGame.init(bridgeSize);

    InputView.readMoving(this.#getMoveDirection.bind(this));
  }

  play() {
    OutputView.printMessage(GameMessage.WELCOME);
    InputView.readBridgeSize(this.#getBridgeSize.bind(this));
  }
}

new App().play();

module.exports = App;
