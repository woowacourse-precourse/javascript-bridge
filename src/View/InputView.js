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
  getInputs(callbackOne, callbackTwo, callbackThree) {
    InputView.readBridgeSize.bind(this)(
      callbackOne,
      callbackTwo,
      callbackThree
    );
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callbackOne, callbackTwo, callbackThree) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_LENGTH, (input) => {
      try {
        callbackOne.call(this, input);
        InputView.readMoving.call(this, callbackTwo, callbackThree);
      } catch (err) {
        printError(err);
        InputView.readBridgeSize.bind(this)(
          callbackOne,
          callbackTwo,
          callbackThree
        );
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callbackTwo, callbackThree) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_DIRECTION, (input) => {
      try {
        const [MOVE, NOT_END] = callbackTwo.call(this, input);
        if (MOVE) {
          if (NOT_END)
            InputView.readMoving.call(this, callbackTwo, callbackThree);
        } else {
          InputView.readGameCommand.call(this, callbackThree);
        }
      } catch (err) {
        printError(err);
        InputView.readMoving.bind(this)(callbackTwo, callbackThree);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callbackThree) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_CONTROL, (input) => {
      callbackThree.call(this, input);
    });
  },
  end() {
    MissionUtils.Console.close();
  },
};

module.exports = InputView;
