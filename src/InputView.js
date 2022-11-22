const { Console } = require('@woowacourse/mission-utils');
const { checkValidSize, checkValidDirection } = require('./utils/validator');
const MESSAGE = require('./constants/message');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridge) {
    Console.readLine(MESSAGE.GAME.INPUT, (size) => {
      checkValidSize(size);
      bridge.set(size);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine(MESSAGE.GAME.MOVE, (direction) => {
      checkValidDirection(direction);
      bridge.move(direction);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
