const { Console } = require("@woowacourse/mission-utils");
const BridgeSizeValidation = require("./Validation/BridgeSizeValidation");
const MovingValidation = require("./validation/MovingValidation");
const GameCommandValidation = require("./validation/GameCommandValidation");

const MESSAGE_GET_BRIDGE_SIZE = "다리의 길이를 입력해주세요. \n";
const MESSAGE_GET_MOVING = "이동할 칸을 선택해주세요. (위: U, 아래: D) \n";
const MESSAGE_GET_GAME_COMMAND =
  "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q) \n";

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return new Promise((resolve) => {
      this.getValidBridgeSize(resolve);
    });
  },

  /**
   * 다리의 길이를 입력받고 유효한 값인지 확인한다.
   */
  getValidBridgeSize(callback) {
    Console.readLine(MESSAGE_GET_BRIDGE_SIZE, (userInput) => {
      try {
        const parsedUserInput = Number(userInput);
        BridgeSizeValidation.validateBridgeSize(parsedUserInput);
        return callback(parsedUserInput);
      } catch (error) {
        Console.print(error.message);
        this.getValidBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    return new Promise((resolve) => {
      this.getValidMoving(resolve);
    });
  },

  /**
   * 이동할 칸을 입력받고 유효한 값인지 확인한다.
   */
  getValidMoving(callback) {
    Console.readLine(MESSAGE_GET_MOVING, (userInput) => {
      try {
        MovingValidation.validateMoving(userInput);
        return callback(userInput);
      } catch (error) {
        Console.print(error.message);
        this.getValidMoving(callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @returns {Promise<string>}
   */
  readGameCommand() {
    return new Promise((resolve) => {
      this.getValidGameCommand(resolve);
    });
  },

  /**
   * 재시도 여부를 입력받고 유효한 값인지 확인한다.
   * @param {Callback} callback
   */
  getValidGameCommand(callback) {
    Console.readLine(MESSAGE_GET_GAME_COMMAND, (userInput) => {
      try {
        GameCommandValidation.validateGameCommand(userInput);
        return callback(userInput);
      } catch (error) {
        Console.print(error.message);
        this.getValidGameCommand(callback);
      }
    });
  },
};

module.exports = InputView;
