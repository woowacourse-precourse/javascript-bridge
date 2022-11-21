const { Console } = require('@woowacourse/mission-utils');
const { CMM_INPUT_MOVING, CMM_INPUT_SIZE } = require('../constant/Comment');
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
      const bridgeSize = validateBridgeSize(input);
      nextStep(bridgeSize);
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(nextStep) {
    Console.readLine(CMM_INPUT_MOVING, (input) => {
      validateMoving(input);
      nextStep(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(nextStep) {
    Console.readLine('끝났어요, 다싷할래요?', (input) => {
      validateReplay(input);
      nextStep(input);
    });
  },
};

module.exports = InputView;
