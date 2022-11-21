const MissionUtils = require('@woowacourse/mission-utils');
const InputTypeValidator = require('./InputTypeValidator');
const { UP, DOWN, RETRY, QUIT } = require('../contants/Options');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(next) {
    const ASK_BRIDGE_SIZE = '다리의 길이를 입력해주세요.';
    MissionUtils.Console.readLine(ASK_BRIDGE_SIZE, (input) => {
      InputTypeValidator.isInteger(input);
      next(input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(next) {
    const ASK_MOVE = `이동할 칸을 선택해주세요. (위: ${UP}, 아래: ${DOWN})`;
    MissionUtils.Console.readLine(ASK_MOVE, (input) => {
      InputTypeValidator.isChar(input);
      next(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(next) {
    const ASK_RETRY = `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${RETRY}, 종료: ${QUIT})`;
    MissionUtils.Console.readLine(ASK_RETRY, (input) => {
      InputTypeValidator.isChar(input);
      next(input);
    });
  },
};

module.exports = InputView;
