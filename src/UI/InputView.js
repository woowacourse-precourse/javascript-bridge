const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants/constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return new Promise((resolve) => {
      Console.readLine(GAME_MESSAGE.SET_BRIDGE_LENGTH, (userInput) => {
        resolve(Number(userInput));
      });
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    return new Promise((resolve) => {
      Console.readLine(GAME_MESSAGE.MOVE_CHOICE, (userInput) => {
        resolve(userInput);
      });
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    return new Promise((resolve) => {
      Console.readLine(GAME_MESSAGE.GAME_RETRY, (userInput) => {
        resolve(userInput);
      });
    });
  },
};

module.exports = InputView;
