const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE_INPUT } = require('./utils/constant');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { bridgeSizeValidator } = require('./Validator');
const OutputView = require('./OutputView');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    try {
      Console.readLine(MESSAGE_INPUT.BRIDGE_SIZE, (size) => {
        bridgeSizeValidator.isBridgeSizeValid(size);
        const bridge = makeBridge(size, generate);
      });
    } catch (e) {
      OutputView.printError(e);
      this.readBridgeSize();
    }
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
