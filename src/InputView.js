const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, REQUIREMENT, ERROR } = require('./constant/Constant');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(app) {
    MissionUtils.Console.readLine(MESSAGE.INPUTBRIDGELENGTH, (input) => {
      try  {
        this.validateBridgeSize(input);
        return app.initGame(input);
      } catch {
        this.readBridgeSize(app);
      }
    }); 
  },

  validateBridgeSize(input) {
    this.validateBridgeSizeLength(input);
    this.validateBridgeSizeRange(input);
  },

  validateBridgeSizeLength(input) {
    const regex = /^[\d]{1,2}$/;
    
    if(!regex.test(input)) {
      MissionUtils.Console.print(ERROR.LENGTH);
      throw new Error(ERROR.LENGTH);
    }
  },

  validateBridgeSizeRange(input) {
    if (Number(input) < REQUIREMENT.MINLEN || Number(input) > REQUIREMENT.MAXLEN) {
      MissionUtils.Console.print(ERROR.LENGTH);
      throw new Error(ERROR.LENGTH);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(app) {
    MissionUtils.Console.readLine(MESSAGE.INPUTMOVINGLOCATION, (input) => {
      try {
        this.validateMove(input);
        return app.proceedGame(input);
      } catch {
        this.readMoving(app);
      }
    });
  },

  validateMove(input) {
    if (input !== REQUIREMENT.UP && input !== REQUIREMENT.DOWN) {
      MissionUtils.Console.print(ERROR.MOVE);
      throw new Error(ERROR.MOVE);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(app) {
    MissionUtils.Console.readLine(MESSAGE.INPUTRETRYORQUIT, (input) => {
      try {      
        this.validateRetry(input);
        return app.retryOrTerminate(input);
      } catch {
        this.readGameCommand(app);
      }
    });
  },

  validateRetry(input) {
    if (input !== REQUIREMENT.RETRY && input !== REQUIREMENT.QUIT) {
      MissionUtils.Console.print(ERROR.RETRY);
      throw new Error(ERROR.RETRY);
    }
  },
};

module.exports = InputView;
