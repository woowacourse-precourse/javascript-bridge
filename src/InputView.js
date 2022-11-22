const { Console } = require("@woowacourse/mission-utils");
const BridgeSizeValidation = require("./BridgeSizeValidation");
const MovingValidation = require("./MovingValidation");
const GameCommandValidation = require("./GameCommandValidation");
const {
  MESSAGE_GET_BRIDGE_SIZE,
  MESSAGE_GET_MOVING,
  MESSAGE_GET_GAME_COMMAND,
} = require("./Utils");
const OutputView = require("./OutputView");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE_GET_BRIDGE_SIZE, (userInput) => {
      try {
        const parsedUserInput = Number(userInput);
        BridgeSizeValidation.validateBridgeSize(parsedUserInput);
        OutputView.print("");
        return callback(parsedUserInput);
      } catch (error) {
        Console.print(error.message);
        this.readBridgeSize(callback);
      }
    });
  },

  readMoving(callback) {
    Console.readLine(MESSAGE_GET_MOVING, (userInput) => {
      try {
        MovingValidation.validateMoving(userInput);
        return callback(userInput);
      } catch (error) {
        OutputView.print(error.message);
        this.readMoving(callback);
      }
    });
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE_GET_GAME_COMMAND, (userInput) => {
      try {
        GameCommandValidation.validateGameCommand(userInput);
        return callback(userInput);
      } catch (error) {
        OutputView.print(error.message);
        this.readGameCommand(callback);
      }
    });
  },
};
module.exports = InputView;
