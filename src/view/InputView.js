const { Console } = require("@woowacourse/mission-utils");
const Validation = require("../validation/Validation");
const { GAME_MESSAGE } = require("../utils/Constants");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 사용자에게 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(GAME_MESSAGE.input_bridge_size, (input) => {
      try {
        Validation.validateBridgeSize(input);
      } catch (error) {
        Console.print(error);
        InputView.readBridgeSize();
      }
      callback(input);
    });
  },

  getBridgeSize(bridgeSize) {
    return Number(bridgeSize);
  },

  /**
   * 사용자에게 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(GAME_MESSAGE.input_moving, (input) => {
      try {
        Validation.validateMoving(input);
      } catch (error) {
        Console.print(error);
        InputView.readMoving();
      }
      callback(input);
    });
  },

  getMoving(moving) {
    return moving;
  },

  /**
   * 사용자에게 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(GAME_MESSAGE.input_command, (input) => {
      try {
        Validation.validateGameCommand(input);
      } catch (error) {
        Console.print(error);
        InputView.readGameCommand();
      }
      callback(input);
    });
  },

  getGameCommand(command) {
    return command;
  },
};

module.exports = InputView;
