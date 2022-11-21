const { Console } = require('@woowacourse/mission-utils');
const { Query } = require('../constants/Constant');
const Validator = require('../utils/Validator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let size;
    try {
      size = this.getUserInput(Query.BRIDGE_SIZE, Validator.bridgeSize);
    } catch (err) {
      Console.print(err.message);
      size = this.getUserInput(Query.BRIDGE_SIZE, Validator.bridgeSize);
    }

    return size;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let direction;
    try {
      direction = this.getUserInput(Query.MOVING, Validator.moving);
    } catch (err) {
      Console.print(err.message);
      direction = this.getUserInput(Query.MOVING, Validator.moving);
    }

    return direction;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let command;
    try {
      command = this.getUserInput(Query.GAME_COMMAND, Validator.gameCommand);
    } catch (err) {
      Console.print(err.message);
      command = this.getUserInput(Query.GAME_COMMAND, Validator.gameCommand);
    }

    return command;
  },

  getUserInput(query, validator) {
    let result;
    Console.readLine(query, input => {
      validator(input);
      result = input;
    });

    return result;
  },
};

module.exports = InputView;
