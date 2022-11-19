const MissionUtils = require('@woowacourse/mission-utils');
const { printError } = require('./OutputView');
const MESSAGE = {
  INPUT_LENGTH: '\n다리의 길이를 입력해주세요. \n',
  INPUT_DIRECTION: '\n이동할 칸을 선택해주세요. (위: U, 아래: D) \n',
  INPUT_CONTROL:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_LENGTH, (input) => {
      callback.call(this, input);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_DIRECTION, (input) => {
      callback.call(this, input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_CONTROL, (input) => {
      callback.call(this, input);
    });
  },

  end() {
    MissionUtils.Console.close();
  },
};

module.exports = InputView;
