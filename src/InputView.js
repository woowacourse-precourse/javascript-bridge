const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR_MESSAGE } = require('./constants');
const { throwError } = require('./utils');
const {
  inValidString,
  inValidSize,
} = require('./Invalidator');

const InputView = {
  readBridgeSize(makeBridge) {
    try {
      Console.readLine(MESSAGE.INPUT_SIZE, (input) => {
        const size = Number(input);
        this.validateSize(size);
        makeBridge(size);
      });
    } catch (error) {
      Console.print(error);
    }
  },

  validateSize(size) {
    if (inValidString(size)) {
      throw ERROR_MESSAGE.INPUT_NUM;
    }

    if (inValidSize(size)) {
      throw ERROR_MESSAGE.BRIDGE_SIZE;
    }
  },
    }
  },

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
