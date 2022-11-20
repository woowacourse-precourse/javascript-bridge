const { Console } = require("@woowacourse/mission-utils");
const Validator = require("./Validator.js");
const InfoMessages = require("./constants/InfoMessages.js");

const InputView = {
  readBridgeSize(createBridge) {
    Console.readLine(InfoMessages.ENTER_BRIDGE_SIZE, (size) => {
      createBridge.call(this, size);
      this.readMoving();
    });
  },

  readMoving(callback) {
    Console.readLine(InfoMessages.ENTER_MOVEMENT_DIRECTION, (direction) => {
      Validator.checkDirectionInput(direction);
      callback(direction);
    });
  },

  readGameCommand(callback) {
    Console.readLine(InfoMessages.RESTART_OR_QUIT, (command) => {
      Validator.checkCommandInput(command);
      callback(command);
    });
  },
};

module.exports = InputView;
