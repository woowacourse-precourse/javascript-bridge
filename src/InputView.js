const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const Validate = require('./utils/Validate');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('\n다리의 길이를 입력해주세요.\n', (size) => {
      try {
        Validate.validateSizeRange(size) && InputView.readMoving(size);
      } catch (error) {
        OutputView.printErrorMessage(error) || InputView.readBridgeSize();
      }
      InputView.readMoving(size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(size) {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (movePosition) => {
      try {
        Validate.validateMovePosition(movePosition);
      } catch (error) {
        OutputView.printErrorMessage(error) || InputView.readMoving(size);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
