const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  INPUT_ERROR_TEXT: '[ERROR] 입력이 없으면 안됩니다.',
  console: MissionUtils.Console,

  validate(userInput) {
    if (!userInput) {
      throw new Error(this.INPUT_ERROR_TEXT);
    }
  },

  exceptionHandling(message, userInput, callbackFn) {
    try {
      this.validate(userInput);
      callbackFn(userInput);
    } catch (error) {
      OutputView.print(error.message);
      this.readLine(message, callbackFn);
    }
  },

  readLine(message, callbackFn) {
    this.console.readLine(message, (userInput) => {
      this.exceptionHandling(message, userInput, callbackFn);
    });
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(message, callbackFn) {
    this.readLine(message, callbackFn);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(message, callbackFn) {
    this.readLine(message, callbackFn);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(message, callbackFn) {
    this.readLine(message, callbackFn);
  },

  close() {
    this.console.close();
  },
};

module.exports = InputView;
