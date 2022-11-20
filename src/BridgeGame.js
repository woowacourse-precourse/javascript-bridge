const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

const { GAME_QUESTION, GAME_RESULT_STATE } = require('./utils/constants');

const controller = require('./controller/BridgeController');

class BridgeGame {
  start() {
    Console.readLine(GAME_QUESTION.bridgeLength, (bridgeLength) => {
      this.#errorCheckFor(
        () => InputView.readBridgeSize(bridgeLength),
        this.start
      ).move();
    });
  }

  move() {
    Console.readLine(GAME_QUESTION.move, (command) => {
      this.#errorCheckFor(() => InputView.readMoving(command), this.move);
      OutputView.printMap();

      this.#checkGameResult(controller.outputExit().result);
    });
  }

  retry() {
    Console.readLine(GAME_QUESTION.gameCommand, (command) => {
      this.#errorCheckFor(
        () => InputView.readGameCommand(command),
        this.retry
      ).#checkGameCommand(command);
    });
  }

  #checkGameResult(gameState) {
    if (gameState === GAME_RESULT_STATE.success) OutputView.printResult();

    if (gameState === GAME_RESULT_STATE.fail) this.retry();

    if (gameState === GAME_RESULT_STATE.try) this.move();
  }

  #checkGameCommand(command) {
    if (command === 'R') {
      controller.inputRestart();
      this.move();
    }

    if (command === 'Q') {
      OutputView.printResult();
    }
  }

  #errorCheckFor(inputFn, beforePlayFn) {
    try {
      inputFn();
    } catch (error) {
      Console.print(error.message);
      beforePlayFn();
    }

    return this;
  }
}

module.exports = BridgeGame;
