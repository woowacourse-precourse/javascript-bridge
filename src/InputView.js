const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const ConstValue = require('./ConstValue');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeLength = 0;
    Console.readLine(ConstValue.INPUT_BRIDGE_LENGTH_MESSAGE, value => {
      this.handleBridgeLengthInput(Number(value));
      bridgeLength = Number(value);
    });

    return bridgeLength;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  handleBridgeLengthInput(length) {
    if (this.checkIsNaN(length)) {
      throw new Error(ConstValue.BRIDGE_LENGTH_INPUT_ERROR_MESSAGE.NOT_A_NUMBER_EXCEPTION);
    }

    if (this.checkNotInRange(length)) {
      throw new Error(ConstValue.BRIDGE_LENGTH_INPUT_ERROR_MESSAGE.NOT_IN_RANGE_EXCEPTION);
    }
  },

  checkIsNaN(length) {
    if (isNaN(length)) {
      return true;
    }

    return false;
  },

  checkNotInRange(length) {
    if (length < ConstValue.MIN_BRIDGE_LENGTH || length > ConstValue.MAX_BRIDGE_LENGTH) {
      return true;
    }

    return false;
  },
};

module.exports = InputView;
