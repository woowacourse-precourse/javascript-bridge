const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const { GAME_QUESTION } = require('../lib/constans');
const { parseNumber } = require('../lib/utils');

class ViewManager {
  #game;

  constructor(game) {
    this.#game = game;
  }

  start() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(GAME_QUESTION.size, this.#readBridgeSizeCallback);
  }

  #readBridgeSizeCallback = (input) => {
    try {
      this.#game.create(parseNumber(input));
      InputView.readMoving(GAME_QUESTION.moving, this.#readMovingCallback);
    } catch (err) {
      throw err;
    }
  };

  #readMovingCallback = (input) => {
    try {
      this.#game.move(input);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = ViewManager;
