const { Console } = require('@woowacourse/mission-utils');
const { command, error } = require('./utils/message');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const bridgeSize = await new Promise((size) => {
      Console.readLine(command.GET_BRIDGE_SIZE, size);
    });
    validate.size(bridgeSize);
    return parseInt(bridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    return await new Promise((move) => {
      Console.readLine(command.MOVE, move);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    return await new Promise((move) => {
      Console.readLine(command.RETRY, move);
    });
  },
};

const validate = {
  size(input) {
    if (isNaN(input)) throw new Error(error.SIZE);
    if ((3 > input) | (input > 20)) throw new Error(error.SIZE);
  },
};

module.exports = InputView;
