const MissionUtils = require('@woowacourse/mission-utils');
const {
  MESSAGE_INPUT_BRIDGE_LENGTH,
  MESSAGE_NEXT_MOVING_INPUT,
  MESSAGE_RETRY,
} = require('../constants');
const Validator = require('../utils/Validator');

const { moveCommandValidator, bridgeLengthValidator, restartCommandValidator } = Validator;

const ModelController = require('../Controller/GameModelController');

const { Console } = MissionUtils;

const InputView = {
  readBridgeSize() {
    Console.readLine(MESSAGE_INPUT_BRIDGE_LENGTH, (length) => {
      if (!bridgeLengthValidator(length)) this.readBridgeSize();
      ModelController.readBridgeController(length);
      InputView.readMoving();
    });
  },

  readMoving() {
    Console.readLine(MESSAGE_NEXT_MOVING_INPUT, (direction) => {
      if (!moveCommandValidator(direction)) this.readMoving();
      ModelController.readMovingController(direction)
        ? this.readMoving()
        : this.readRestartCommand();
    });
  },

  readRestartCommand() {
    if (ModelController.readGameComplete()) return;
    Console.readLine(MESSAGE_RETRY, (command) => {
      if (!restartCommandValidator(command)) this.readRestartCommand();
      ModelController.readRestartCommandController(command)
        ? this.readMoving()
        : GAME_MANAGER.printResult();
    });
  },
};

module.exports = InputView;
