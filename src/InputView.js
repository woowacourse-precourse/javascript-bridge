const { Console } = require('@woowacourse/mission-utils');
const { command } = require('./utils/message');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    return await new Promise((size) => {
      Console.readLine(command.GET_BRIDGE_SIZE, size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const move = await new Promise((move) => {
      Console.readLine(command.MOVE, move);
    });
    return move;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    const retry = await new Promise((move) => {
      Console.readLine(command.RETRY, move);
    });
    return retry;
  },
};

module.exports = InputView;
