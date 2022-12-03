const OutputView = require('../OutputView');
const controller = require('../../controller/BridgeController');
const { GAMEOVER_COMMAND } = require('../../utils/constants');

class GameCommandEvent {
  #inputViewInstance;

  #command;

  constructor({ inputViewInstance, command }) {
    this.#inputViewInstance = inputViewInstance;
    this.#command = command;
  }

  #handleRestart() {
    if (this.#command === GAMEOVER_COMMAND.restart) {
      controller.inputRestart();
      this.#inputViewInstance.readMoving();
    }

    return this;
  }

  #handleExit() {
    if (this.#command === GAMEOVER_COMMAND.exit) {
      OutputView.printResult();
    }

    return this;
  }

  handle() {
    this.#handleRestart().#handleExit();
  }
}

module.exports = GameCommandEvent;
