const { Console } = require('@woowacourse/mission-utils');
const {
  validateBridgeSize,
  validateUserPosition,
  validateRetryAnswer,
} = require('../utils/validations');
const OutputView = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      try {
        validateBridgeSize(size);
        callback(size);
      } catch (error) {
        OutputView.printError(error);
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(
      '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      (position) => {
        try {
          validateUserPosition(position);
          callback(position);
        } catch (error) {
          OutputView.printError(error);
          this.readMoving(callback);
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      (answer) => {
        try {
          validateRetryAnswer(answer);
          callback(answer);
        } catch (error) {
          OutputView.printError(error);
          this.readGameCommand(callback);
        }
      }
    );
  },
};

module.exports = InputView;
