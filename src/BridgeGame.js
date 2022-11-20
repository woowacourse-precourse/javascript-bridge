const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

const { GAME_QUESTION, GAME_RESULT_STATE } = require('./utils/constants');

const controller = require('./controller/BridgeController');

class BridgeGame {
  start() {
    Console.readLine(GAME_QUESTION.bridgeLength, (bridgeLength) => {
      InputView.readBridgeSize(bridgeLength);
      this.move();
    });
  }

  move() {
    Console.readLine(GAME_QUESTION.move, (command) => {
      InputView.readMoving(command);
      OutputView.printMap();

      this.#checkGameResult(controller.outputExit().result);
    });
  }

  retry() {
    Console.readLine(GAME_QUESTION.gameCommand, (command) => {
      InputView.readGameCommand(command);

      this.#checkGameCommand(command);
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
}

module.exports = BridgeGame;
