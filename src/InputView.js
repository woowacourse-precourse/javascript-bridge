const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
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
      this.validateBridgeInput(userInput);
    });
  },

  validateBridgeInput(userInput) {
    try {
      Validate.sizeInput(userInput);
      const BUILD_BRIDGE = BridgeRandomNumberGenerator.generate;
      const BRIDGE = BridgeMaker.makeBridge(userInput, BUILD_BRIDGE);
      this.readMoving(BRIDGE);
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
      this.validateMovingInput(userInput, bridgeArray);
    });
  },

  validateMovingInput(userInput, bridgeArray) {
    try {
      Validate.moveInput(userInput);
      const BRIDGE_GAME = new BridgeGame(bridgeArray);
      this.readMoving(BRIDGE_GAME.move(userInput));
    } catch (error) {
      MissionUtils.Console.print(error);
      this.readMoving(bridgeArray);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
