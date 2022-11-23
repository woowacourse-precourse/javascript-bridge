const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (input) => {
      return this.asyncReadBridgeSizeFn(callback, input);
    });
  },

  async asyncReadBridgeSizeFn(cb, size) {
    try {
      return cb(size);
    } catch (error) {
      Console.print(error.message);
      return this.readBridgeSize(cb);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback, index) {
    Console.readLine(INPUT_MESSAGE.MOVING, (input) => {
      return this.asyncReadMovingFn(callback, index, input);
    });
  },

  async asyncReadMovingFn(cb, Index, upOrDown) {
    try {
      cb(upOrDown, Index);
      return Index < this.bridgeSize - 1 && this.readMoving(cb, Index + 1);
    } catch (error) {
      Console.print(error.message);
      return this.readMoving(cb, Index, upOrDown);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.COMMAND, (input) => {
      return this.asyncReadGameCommand(callback, input);
    });
  },

  async asyncReadGameCommand(cb, command) {
    try {
      return cb(command);
    } catch (error) {
      Console.print(error.message);
      return this.readGameCommand(cb, command);
    }
  },
};

module.exports = InputView;
