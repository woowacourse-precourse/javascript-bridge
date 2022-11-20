const { Console } = require('@woowacourse/mission-utils');
const BridgeController = require('./controller/BridgeController');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

const { GAME_QUESTION, GAME_RESULT_STATE } = require('./utils/constants');

class BridgeGame {
  #controller;

  constructor() {
    this.#controller = new BridgeController();
  }

  start() {
    Console.readLine(GAME_QUESTION.bridgeLength, (bridgeLength) => {
      InputView.readBridgeSize(bridgeLength);

      this.#controller.inputBridgeLength(bridgeLength);
      this.move();
    });
  }

  move() {
    Console.readLine(GAME_QUESTION.move, (command) => {
      InputView.readMoving(command);

      this.#controller.inputBridgeUpDown(command);
      OutputView.printMap(this.#controller);
      this.#checkGameResult(this.#controller.outputExit().result);
    });
  }

  retry() {
    Console.readLine(GAME_QUESTION.gameCommand, (command) => {
      InputView.readGameCommand(command);

      this.#checkGameCommand(command);
    });
  }

  #checkGameResult(gameState) {
    if (gameState === GAME_RESULT_STATE.success)
      OutputView.printResult(this.#controller);

    if (gameState === GAME_RESULT_STATE.fail) this.retry();

    if (gameState === GAME_RESULT_STATE.try) this.move();
  }

  #checkGameCommand(command) {
    switch (command) {
      case 'R':
        this.#controller.inputRestart();
        this.move();
        break;
      default:
        OutputView.printResult(this.#controller);
    }
  }
}

module.exports = BridgeGame;
