const { COMMAND, PHASE } = require('../constant/Constant');
const BridgeGame = require('../model/BridgeGame');
const Validator = require('../Validator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #methods = {
    [PHASE.START]: InputView.readBridgeSize,
    [PHASE.MOVE]: InputView.readMoving,
    [PHASE.COMMAND]: InputView.readGameCommand,
    [PHASE.RESULT]: OutputView.printResult,
  };

  #args = {
    [PHASE.START]: this.#startGame.bind(this),
    [PHASE.MOVE]: this.#moveResult.bind(this),
    [PHASE.COMMAND]: this.#triggerEvent.bind(this),
  };

  #validator = new Validator();

  #phase;

  #bridgeGame;

  goTo(phase) {
    const method = this.#methods[phase];
    const arg = this.#args[phase];

    this.#phase = phase;
    method(arg);
  }

  #isValid(input) {
    try {
      this.#validator.goTo(this.#phase, input);
    } catch (error) {
      OutputView.print(`${error.message}\n`);
      this.goTo(this.#phase);
      return false;
    }
    return true;
  }

  #startGame(input) {
    if (!this.#isValid(input)) {
      return;
    }

    this.#bridgeGame = new BridgeGame(input);
    this.#args[PHASE.RESULT] = this.#bridgeGame;
    OutputView.nextLine();
    this.goTo(PHASE.MOVE);
  }

  #moveResult(input) {
    if (!this.#isValid(input)) {
      return;
    }

    const bridgeGame = this.#bridgeGame;
    const phase = bridgeGame.move(input);

    bridgeGame.drawMap(input);
    OutputView.printMap(bridgeGame.moveMap);
    this.goTo(phase);
  }

  #triggerEvent(input) {
    if (!this.#isValid(input)) {
      return;
    }

    if (input === COMMAND.RETRY) {
      this.goTo(this.#bridgeGame.retry());
      return;
    }
    this.goTo(PHASE.RESULT);
  }
}

module.exports = Controller;
