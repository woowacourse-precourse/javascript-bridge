const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');
const Validator = require('./Validator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, (size) => {
        try {
          Validator.checkBridgeSize(size);
          resolve(size);
        } catch (error) {
          reject(error);
        }
      });
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  readMoving() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(MESSAGE.INPUT_MOVING_DIRECTION, (direction) => {
        try {
          Validator.checkMovingDirection(direction);
          resolve(direction);
        } catch (error) {
          reject(error);
        }
      });
    });
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(MESSAGE.INPUT_GAME_COMMAND, (command) => {
        try {
          Validator.checkGameCommand(command);
          resolve(command);
        } catch (error) {
          reject(error);
        }
      });
    });
  },
};

module.exports = InputView;
