const BridgeGame = require('./BridgeGame');
const Validation = require('./Validation');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const GameMessage = require('./constants/GameMessage');

class App {
  /** @type {BridgeGame} */
  #GameClient = new BridgeGame();

  /** @type {number} */
  #bridgeLength;

  /**
   * @param {string} input
   */
  #setBridgeLength(input) {
    Validation.Bridge(input);
    this.#bridgeLength = Number(input);
  }

  play() {
    OutputView.printMessage(GameMessage.WELCOME);
    InputView.readBridgeSize(this.#setBridgeLength.bind(this));
  }
}

module.exports = App;
