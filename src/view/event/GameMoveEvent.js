const OutputView = require('../OutputView');
const { GAME_RESULT_STATE } = require('../../utils/constants');

class GameMoveEvent {
  #gameState;

  #inputViewInstance;

  constructor({ inputViewInstance, gameState }) {
    this.#gameState = gameState;
    this.#inputViewInstance = inputViewInstance;
  }

  #handleSuccess() {
    if (this.#gameState === GAME_RESULT_STATE.success) OutputView.printResult();

    return this;
  }

  #handleFail() {
    if (this.#gameState === GAME_RESULT_STATE.fail)
      this.#inputViewInstance.readGameCommand();

    return this;
  }

  #handleTry() {
    if (this.#gameState === GAME_RESULT_STATE.try)
      this.#inputViewInstance.readMoving();

    return this;
  }

  handle() {
    OutputView.printMap();

    this.#handleSuccess()
      .#handleTry()
      .#handleFail();
  }
}

module.exports = GameMoveEvent;
