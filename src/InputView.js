const { Console } = require("@woowacourse/mission-utils");
const BridgeSizeValidation = require("./Validation/BridgeSizeValidation");
const MovingValidation = require("./validation/MovingValidation");
const GameCommandValidation = require("./validation/GameCommandValidation");
const {
  MESSAGE_GET_BRIDGE_SIZE,
  MESSAGE_GET_MOVING,
  MESSAGE_GET_GAME_COMMAND,
} = require("./Utils");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
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

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
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
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @returns {Promise<string>}
   */
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
