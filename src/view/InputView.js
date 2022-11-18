const { INPUT_MESSAGES } = require('../constants/messages');
const { readLine } = require('../utils/missionUtil');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    const { bridgeSize } = INPUT_MESSAGES;
    const getUserInput = (answer) => {
      console.log(answer);
    };
    readLine(bridgeSize, getUserInput);
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
