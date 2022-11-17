const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utiles/Constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize(callback) {
    Console.print(MESSAGE.GAME_START);
    Console.readLine(MESSAGE.BRIDGE_SIZE, callback);
  },
  
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
