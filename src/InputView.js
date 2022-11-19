const { Console } = require('@woowacourse/mission-utils');
const { validateMove } = require('./utils/validate');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine('다리의 길이를 입력해주세요.', (size) => {
      try {
        callback(Number(size));
      } catch (e) {
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (move) => {
      try {
        callback(move);
      } catch (e) {
        this.readMoving(callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      (answer) => {
        try {
          callback(answer);
        } catch (e) {
          this.readGameCommand(callback);
        }
      },
    );
  },
};

module.exports = InputView;
