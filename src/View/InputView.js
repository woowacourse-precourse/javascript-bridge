const MissionUtils = require('@woowacourse/mission-utils');
const validation = require('../Utils/Validation');
const Const = require('../constant/message');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    const result = this.read(Const.MESSAGE.GAME_START);
    if (!validation.validateBridgeLength(result)) throw new Error(Const.ERROR_MESSAGE.ERROR_SIZE);
    return result;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const result = this.read(Const.MESSAGE.MOVE);
    if (!validation.validationMove(result)) throw new Error(Const.ERROR_MESSAGE.ERROR_MOVE);
    return result;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    const result = this.read(Const.MESSAGE.RETRY);
    if (!validation.validationRetry(result)) throw new Error(Const.ERROR_MESSAGE.ERROR_RETRY);
    return result;
  },

  read(message) {
    let result;
    MissionUtils.Console.readLine(message, (input) => {
      result = input;
    });
    return result;
  },
};

module.exports = InputView;
