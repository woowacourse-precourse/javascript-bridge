const { Console } = require('@woowacourse/mission-utils');

const Input = require('./input/Input');

const OutputView = require('./OutputView');
const controller = require('../controller/BridgeController');

const { errorCheckFor } = require('../utils/inputErrorCheck');

const {
  GAME_QUESTION,
  GAME_RESULT_STATE,
  GAMEOVER_COMMAND,
} = require('../utils/constants');

const InputView = {
  input: new Input(),

  readBridgeSize() {
    Console.readLine(GAME_QUESTION.bridgeLength, (bridgeLength) => {
      errorCheckFor(
        () => this.input.inputBridgeSize(bridgeLength),
        () => this.readBridgeSize()
      );

      this.readMoving();
    });
  },

  readMoving() {
    Console.readLine(GAME_QUESTION.move, (command) => {
      errorCheckFor(
        () => this.successMoveEvent(command),
        () => this.readMoving()
      );
    });
  },

  readGameCommand() {
    Console.readLine(GAME_QUESTION.gameCommand, (command) => {
      errorCheckFor(
        () => this.input.inputGameCommand(command),
        () => this.readGameCommand()
      );

      this.checkGameCommand(command);
    });
  },

  successMoveEvent(command) {
    this.input.inputMoveCommand(command);
    OutputView.printMap();
    this.checkGameResult(controller.outputExit().result);
  },

  checkGameResult(gameState) {
    if (gameState === GAME_RESULT_STATE.success) OutputView.printResult();

    if (gameState === GAME_RESULT_STATE.fail) this.readGameCommand();

    if (gameState === GAME_RESULT_STATE.try) this.readMoving();
  },

  checkGameCommand(command) {
    if (command === GAMEOVER_COMMAND.restart) {
      controller.inputRestart();
      this.readMoving();
    }

    if (command === GAMEOVER_COMMAND.exit) {
      OutputView.printResult();
    }
  },
};

module.exports = InputView;
