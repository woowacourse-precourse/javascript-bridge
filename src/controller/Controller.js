const { PHASE } = require('../constant/Constant');
const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #COMMAND = Object.freeze({
    RETRY: 'R',
    QUIT: 'Q',
  });

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

  #phase;

  #bridgeGame;

  goTo(phase) {
    const method = this.#methods[phase];
    const arg = this.#args[phase];

    this.#phase = phase;
    method(arg);
  }

  #startGame(input) {
    this.#bridgeGame = new BridgeGame(input);
    this.#args[PHASE.RESULT] = this.#bridgeGame;
    OutputView.nextLine();
    this.goTo(PHASE.MOVE);
  }

  #moveResult(input) {
    const bridgeGame = this.#bridgeGame;
    const phase = bridgeGame.move(input);

    bridgeGame.drawMap(input);
    OutputView.printMap(bridgeGame.moveMap);
    this.goTo(phase);
  }

  #triggerEvent(command) {
    if (command === this.#COMMAND.RETRY) {
      this.#bridgeGame.retry(this.goTo.bind(this));
      return;
    }
    this.goTo(PHASE.RESULT);
  }
}

module.exports = Controller;
