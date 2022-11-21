const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('./Exception');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { CONSOLE_MESSAGE } = require('./utils/constants');
const OutputView = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  exception: new Exception(),
  bridge: [],
  moveCount: 0,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.bridgeLengthInput, (input) => {
      try {
        this.exception.validateBridgeLength(input);
      } catch (error) {
        return this.readBridgeSize();
      }

      this.getBridge(input);
      this.readMoving();
    });
  },

  getBridge(input) {
    const BRIDGE = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
    this.bridge = BRIDGE;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.moveInput, (input) => {
      try {
        this.exception.validateMove(input);
      } catch (error) {
        return this.readMoving();
      }

      OutputView.printMap(this.bridge[this.moveCount], input);
      this.moveCount += 1; 
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
