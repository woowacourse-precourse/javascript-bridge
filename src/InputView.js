const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const {
  IS_INPUT_NOT_NUMBER,
  IS_INPUT_EMPTY,
  IS_INPUT_NOT_IN_RANGE
} = require('./constants/error/MakeBridgeError');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  checkBridgeLengthInputNotNull(input) {
    if (input.length === 0) {
      throw new Error(IS_INPUT_EMPTY);
    }
    return true;
  },

  checkIsBridgeLengthInputNum(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error(IS_INPUT_NOT_NUMBER);
    }
    return true;
  },

  checkBridgeLengthNumInRange(input) {
    if (input < 3 || input > 20) {
      throw new Error(IS_INPUT_NOT_IN_RANGE);
    }
    return true;
  },

  checkBridgeLengthInput(input) {
    this.checkBridgeLengthInputNotNull(input);
    this.checkIsBridgeLengthInputNum(input);
    this.checkBridgeLengthNumInRange(input);
  },
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    return Console.readLine('다리의 길이를 입력해주세요.\n', (input) => {
      this.checkBridgeLengthInput(input);
      BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
    });
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
