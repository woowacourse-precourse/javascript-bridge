const { Console } = require('@woowacourse/mission-utils');
const { generate } = require('../BridgeRandomNumberGenerator');
const Bridge = require('../Model/Bridge');
const { RETRY_MESSAGE } = require('../Utils/Constant');
const { isRightRetryString } = require('../Utils/Validator');
const InputView = require('../Viewer/InputView');
const OutputView = require('../Viewer/OutputView');

class GameController {
  #game;

  constructor(game) {
    this.#game = game;
  }

  start() {
    InputView.readBridgeSize(this);
  }

  createBridge(input) {
    this.#game.createBridge(new Bridge(input, generate));
    InputView.readMoving(this);
  }

  setNextTurn(input) {
    this.#game.move(input);
    OutputView.printMap(this.#game);
    if (this.#game.isReMoving()) return InputView.readMoving(this);
    OutputView.printResult(this.#game);
    if (this.#game.isEnd()) return Console.close();
    return InputView.readGameCommand(this);
  }

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
