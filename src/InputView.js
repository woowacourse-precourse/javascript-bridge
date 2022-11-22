const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./utils/constructor');
const { handleInputError } = require('./utils/handler');
const { validBridgeSize, } = require('./utils/Validation');

const InputView = {

  readBridgeSize(nextStep) {
    return Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, size => {
      try {
        validBridgeSize(size);
        nextStep(size);
      } catch (e) {
        handleInputError(e.message, InputView.readBridgeSize, nextStep);
      }
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


