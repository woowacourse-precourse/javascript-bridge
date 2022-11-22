const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

const {
  GAME_QUESTION,
  GAME_RESULT_STATE,
  GAMEOVER_COMMAND
} = require('./utils/constants');

const controller = require('./controller/BridgeController');

class BridgeGame {
  start() {
    Console.readLine(GAME_QUESTION.bridgeLength, (bridgeLength) => {
      this.#errorCheckFor(
        () => InputView.readBridgeSize(bridgeLength),
        () => this.start()
      ).move();
    });
  }

  move() {
    Console.readLine(GAME_QUESTION.move, (command) => {
      this.#errorCheckFor(
        () => this.#successMoveEvent(command),
        () => this.move()
      );
    });
  }

  retry() {
    Console.readLine(GAME_QUESTION.gameCommand, (command) => {
      this.#errorCheckFor(
        () => InputView.readGameCommand(command),
        () => this.retry()
      ).#checkGameCommand(command);
    });
  }

  #successMoveEvent(command) {
    InputView.readMoving(command);
    OutputView.printMap();
    this.#checkGameResult(controller.outputExit().result);
  }

  #checkGameResult(gameState) {
    if (gameState === GAME_RESULT_STATE.success) OutputView.printResult();

    if (gameState === GAME_RESULT_STATE.fail) this.retry();

    if (gameState === GAME_RESULT_STATE.try) this.move();
  }

  #checkGameCommand(command) {
    if (command === GAMEOVER_COMMAND.restart) {
      controller.inputRestart();
      this.move();
    }

    if (command === GAMEOVER_COMMAND.exit) {
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
