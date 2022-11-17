const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const Validate = require('./Validation');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.print('다리의 길이를 입력해주세요.');
    MissionUtils.Console.readLine('', (userInput) => {
      this.validateInput(userInput);
    });
  },

  validateInput(userInput) {
    try {
      Validate.sizeInput(userInput);
      const BUILD_BRIDGE = BridgeRandomNumberGenerator.generate;
      return BridgeMaker.makeBridge(userInput, BUILD_BRIDGE);
    } catch (error) {
      MissionUtils.Console.print(error);
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
