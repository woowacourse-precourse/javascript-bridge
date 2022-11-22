const { Console } = require("@woowacourse/mission-utils");
const InfoMessages = require("../constants/InfoMessages.js");

const InputView = {
  readBridgeSize(handleCreatingBridge) {
    Console.readLine(InfoMessages.ENTER_BRIDGE_SIZE, (size) => {
      handleCreatingBridge.call(this, size);
    });
  },

  readMoving(handleMoving) {
    Console.readLine(InfoMessages.ENTER_MOVEMENT_DIRECTION, (direction) => {
      handleMoving.call(this, direction);
    });
  },

  readGameCommand(handleGameCommand) {
    Console.readLine(InfoMessages.RESTART_OR_QUIT, (command) => {
      handleGameCommand.call(this, command);
    });
  },
};

module.exports = InputView;
