const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/BridgeGameMessage');
const Validator = require('./utils/Validator');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.PROCESS.ENTER_BRIDGE_LENGTH, (size) => {
      Validator.isCorrectLength(size);
      return size;
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGE.PROCESS.SELECT_UP_DOWN, (select) => {
      Validator.isUpOrDown(select);
      return select;
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.PROCESS.SELECT_RESTART_OR_QUIT, (select) => {
      Validator.isRestartOrQuit(select);
      return select;
    });
  },
};

module.exports = InputView;
