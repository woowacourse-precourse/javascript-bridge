const { Console } = require("@woowacourse/mission-utils");
const { ASKS } = require("../Constants/Message");

const InputView = {
  readBridgeSize(createBridgeController) {
    Console.readLine(ASKS.BRIDGE_SIZE, (sizeInput) => {
      createBridgeController(sizeInput);
    });
  },

  readMoving(moveController) {
    Console.readLine(ASKS.PLAYER_MOVING, (moveInput) => {
      moveController(moveInput);
    });
  },

  readGameCommand(commandController) {
    Console.readLine(ASKS.PLAYER_COMAND, (commandInput) => {
      commandController(commandInput);
    });
  },
};

module.exports = InputView;
