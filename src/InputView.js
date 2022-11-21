const { Console } = require("@woowacourse/mission-utils");
const Validator = require("./Validator.js");
const InfoMessages = require("./constants/InfoMessages.js");

const InputView = {
  readBridgeSize(createBridge) {
    Console.readLine(InfoMessages.ENTER_BRIDGE_SIZE, (size) => {
      createBridge.call(this, size);
    });
  },

  readMoving(handleMoving) {
    Console.readLine(InfoMessages.ENTER_MOVEMENT_DIRECTION, (direction) => {
      handleMoving.call(this, direction);
    });
  },

  readGameCommand(handleGameCommand) {
    Console.readLine(InfoMessages.RESTART_OR_QUIT, (command) => {
      Validator.checkCommandInput(command);
      handleGameCommand.call(this, command);
    });
  },
};

module.exports = InputView;
