const { Console } = require('@woowacourse/mission-utils');

const BridgeLengthException = require('./validate/BridgeLengthException');
const BridgeUpDownException = require('./validate/BridgeUpDownException');
const BridgeRestartExitException = require('./validate/BridgeRestartExitException');

const OutputView = require('./OutputView');
const controller = require('../controller/BridgeController');

const { errorCheckFor } = require('../utils/inputErrorCheck');

const {
  GAME_QUESTION,
  GAME_RESULT_STATE,
  GAMEOVER_COMMAND,
} = require('../utils/constants');

const InputView = {
  validate(exceptInstance) {
    exceptInstance.isValidate();
  },

  inputBridgeSize(input) {
    InputView.validate(new BridgeLengthException(input));

    controller.inputBridgeLength(input);
  },

  inputMoveCommand(input) {
    InputView.validate(new BridgeUpDownException(input));

    controller.inputBridgeUpDown(input);
  },

  inputGameCommand(input) {
    InputView.validate(new BridgeRestartExitException(input));
  },

  readBridgeSize() {
    Console.readLine(GAME_QUESTION.bridgeLength, (bridgeLength) => {
      errorCheckFor(
        () => InputView.inputBridgeSize(bridgeLength),
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
        () => InputView.inputGameCommand(command),
        () => this.readGameCommand()
      );

      this.checkGameCommand(command);
    });
  },

  successMoveEvent(command) {
    InputView.inputMoveCommand(command);
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
