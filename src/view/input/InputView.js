const MissionUtils = require('@woowacourse/mission-utils');
const InputTypeValidator = require('./InputTypeValidator');
const { ASK_BRIDGE_SIZE, ASK_MOVE, ASK_RETRY } = require('./InputMessages');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(next) {
    MissionUtils.Console.readLine(ASK_BRIDGE_SIZE, (input) => {
      InputTypeValidator.isInteger(input);
      next(input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(next) {
    MissionUtils.Console.readLine(ASK_MOVE, (input) => {
      InputTypeValidator.isChar(input);
      next(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(next) {
    MissionUtils.Console.readLine(ASK_RETRY, (input) => {
      InputTypeValidator.isChar(input);
      next(input);
    });
  },
};

module.exports = InputView;
