const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../BridgeGame');
const { generate } = require('../BridgeRandomNumberGenerator');
const Bridge = require('../Model/Bridge');
const { RETRY_MESSAGE } = require('../Utils/Constant');
const BridgeValidator = require('../Utils/Validator/BridgeValidator');
const GameValidator = require('../Utils/Validator/GameValidator');
const { isRightRetryString } = require('../Utils/Validator/GameValidator');
const SelectedValidator = require('../Utils/Validator/SelectedValidator');
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

  static isRetry(input) {
    return input === RETRY_MESSAGE.RETRY;
  }

  static validate(input) {
    isRightRetryString(input);
  }

  start() {
    InputView.readBridgeSize(this);
  }

  /**
   *
   * @param {number} input
   */
  createBridge(input) {
    BridgeValidator.validator(input);
    this.#game.createBridge(new Bridge(input, generate));
    return InputView.readMoving(this);
  }

  /**
   *
   * @param {number} input
   * @returns {undefined}
   */
  setNextTurn(input) {
    SelectedValidator.validator(input);
    this.#game.move(input);
    OutputView.printMap(this.#game.result);
    if (this.#game.isReMoving()) return InputView.readMoving(this);
    if (this.#game.isEnd()) {
      OutputView.printResult(this.#game.result, this.#game.isWin(), this.#game.tryNumber);
      return Console.close();
    }
    return InputView.readGameCommand(this);
  }

  /**
   *
   * @param {string} input
   * @returns {undefined}
   */
  setRetryOrQuit(input) {
    GameValidator.validator(input);
    if (this.constructor.isRetry(input)) {
      this.#game.retry();
      return InputView.readMoving(this);
    }
    OutputView.printResult(this.#game.result, this.#game.isWin(), this.#game.tryNumber);
    return Console.close();
  }
}

module.exports = GameController;
