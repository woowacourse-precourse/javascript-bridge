const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../BridgeGame');
const { generate } = require('../BridgeRandomNumberGenerator');
const Bridge = require('../Model/Bridge');
const { RETRY_MESSAGE } = require('../Utils/Constant');
const { isRightRetryString } = require('../Utils/Validator');
const InputView = require('../Viewer/InputView');
const OutputView = require('../Viewer/OutputView');

class GameController {
  /** @type {BridgeGame} */
  #game;

  /**
   *
   * @param {BridgeGame} game
   */
  constructor(game) {
    this.#game = game;
  }

  start() {
    InputView.readBridgeSize(this);
  }

  /**
   *
   * @param {number} input
   */
  createBridge(input) {
    this.#game.createBridge(new Bridge(input, generate));
    InputView.readMoving(this);
  }

  /**
   *
   * @param {number} input
   * @returns {undefined}
   */
  setNextTurn(input) {
    this.#game.move(input);
    OutputView.printMap(this.#game);
    if (this.#game.isReMoving()) return InputView.readMoving(this);
    OutputView.printResult(this.#game);
    if (this.#game.isEnd()) return Console.close();
    return InputView.readGameCommand(this);
  }

  /**
   *
   * @param {string} input
   * @returns {undefined}
   */
  setRetryOrQuit(input) {
    isRightRetryString(input);
    if (input === RETRY_MESSAGE.RETRY) {
      this.#game.retry();
      return InputView.readMoving(this);
    }
    OutputView.printResult(this.#game);
    return Console.close();
  }
}

module.exports = GameController;
