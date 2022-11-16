const Console = require('../utils/Console');
const { MESSAGE_QUESTION } = require('../constants/message');

const InputView = {
  readBridgeSize() {
    Console.readLine(MESSAGE_QUESTION.BRIDGE_SIZE, rowDataOfBridgeSize => {});
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
