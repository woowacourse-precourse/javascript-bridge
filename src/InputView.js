const MissionUtils = require('@woowacourse/mission-utils');
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
      this.validateRange(userInput);
      this.validatrForm(userInput);
    });
  },

  validateRange(userInput) {
    try {
      Validate.sizeInputRange(userInput);
    } catch {
      MissionUtils.Console.print('\n[ERROR] 공백없이 3 ~ 20 사이의 숫자를 입력 해주세요.\n');
      this.readBridgeSize(userInput);
    }
  },

  validatrForm(userInput) {
    try {
      Validate.sizeInputForm(userInput);
    } catch {
      MissionUtils.Console.print('\n[ERROR] 다리 길이는 숫자로 입력해 주세요.\n');
      this.readBridgeSize(userInput);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
