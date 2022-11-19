const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, REQUIREMENT, ERROR } = require('./constant/Constant');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(next) {
    MissionUtils.Console.readLine(MESSAGE.INPUTBRIDGELENGTH, (input) => {
      this.validateBridgeSize(input);
      // return input;
      next(input);
    }); 
  },

  validateBridgeSize(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error(ERROR.LENGTH);
    }
    if (Number(input) < REQUIREMENT.MINLEN || Number(input) > REQUIREMENT.MAXLEN) {
      throw new Error(ERROR.LENGTH);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(next, bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.INPUTMOVINGLOCATION, (input) => {
      this.validateMove(input);
      // return input;
      next(input, bridgeGame);
    });
  },

  validateMove(input) {
    if (input !== REQUIREMENT.UP && input !== REQUIREMENT.DOWN) {
      throw new Error(ERROR.MOVE);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(MESSAGE.INPUTRETRYORQUIT, (input) => {
      this.validateRetry(input);
      return input;
    });
  },

  validateRetry(input) {
    if (input !== REQUIREMENT.RETRY && input !== REQUIREMENT.QUIT) {
      throw new Error(ERROR.RETRY);
    }
  },
};

module.exports = InputView;
