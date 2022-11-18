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
  getInputs(callbackArr) {
    InputView.readBridgeSize.bind(this)(callbackArr);
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callbackArr) {
    const [one, two, three] = callbackArr;
    MissionUtils.Console.readLine(MESSAGE.INPUT_LENGTH, (input) => {
      try {
        one.call(this, input);
        InputView.readMoving.call(this, [two, three]);
      } catch (err) {
        printError(err);
        InputView.readBridgeSize.bind(this)(callbackArr);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callbackArr) {
    const [one, two] = callbackArr;
    MissionUtils.Console.readLine(MESSAGE.INPUT_DIRECTION, (input) => {
      try {
        const [MOVE, NOT_END] = one.call(this, input);
        if (MOVE && NOT_END) InputView.readMoving.call(this, callbackArr);
        if (!MOVE) InputView.readGameCommand.call(this, two);
      } catch (err) {
        printError(err);
        InputView.readMoving.bind(this)(callbackArr);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callbackThree) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_CONTROL, (input) => {
      try {
        callbackThree.call(this, input);
      } catch (err) {
        printError(err);
        InputView.readGameCommand.bind(this)(callbackThree);
      }
    });
  },
  end() {
    MissionUtils.Console.close();
  },
};

module.exports = InputView;
