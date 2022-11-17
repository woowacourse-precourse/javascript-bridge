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
      const BRIDGE = this.validateBridgeInput(userInput);
      this.readMoving(BRIDGE);
    });
  },

  validateBridgeInput(userInput) {
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
  readMoving(bridgeArray) {
    MissionUtils.Console.print('\n이동할 칸을 선택해주세요. (위: U, 아래: D)');
    MissionUtils.Console.readLine('', (userInput) => {
      const USER_ANSWER = this.validateMovingInput(userInput);
    });
  },

  validateMovingInput(userInput) {
    try {
      Validate.moveInput(userInput);
      return userInput;
    } catch (error) {
      MissionUtils.Console.print(error);
      this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
