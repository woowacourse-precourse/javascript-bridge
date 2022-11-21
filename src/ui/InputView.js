const { Console } = require('@woowacourse/mission-utils');
const { CMM_INPUT_MOVING, CMM_INPUT_SIZE, CMM_INPUT_REPLAY } = require('../constant/Comment');
const { validateBridgeSize, validateMoving, validateReplay } = require('./InputValidation');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(nextStep) {
    Console.readLine(CMM_INPUT_SIZE, (input) => {
      try {
        const bridgeSize = validateBridgeSize(input);
        nextStep(bridgeSize);
      } catch (e) {
        Console.print(e);
        this.readBridgeSize(nextStep);
      }
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(nextStep) {
    Console.readLine(CMM_INPUT_MOVING, (input) => {
      try {
        validateMoving(input);
        nextStep(input);
      } catch (e) {
        Console.print(e);
        this.readMoving(nextStep);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(nextStep) {
    Console.readLine(CMM_INPUT_REPLAY, (input) => {
      try {
        validateReplay(input);
        nextStep(input);
      } catch (e) {
        Console.print(e);
        this.readGameCommand(nextStep);
      }
    });
  },
};

module.exports = InputView;
