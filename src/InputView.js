const {Console} = require("@woowacourse/mission-utils");
const {checkBridgeSize, checkSideInput, checkRetryKey} = require("./Validation");

const InputView = {

  readBridgeSize(callback) {
    Console.readLine('다리의 길이를 입력해주세요.', (size) => {
      try {
        checkBridgeSize(size);
        callback(size);
      } catch (e) {
        Console.print(e);
        this.readBridgeSize(callback);       
      }
    });
  },

  readMoving(callback) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (side) => {
      try {
        checkSideInput(side);
        callback(side);
      } catch (e) {
        Console.print(e);
        this.readMoving(callback);
      }
    });
  },

  /* 재시작, 종료 여부 입력받는 메서드 */
  readGameCommand(callback) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (key) => {
      try {
        checkRetryKey(key);
        callback(key === 'R');
      } catch (e) {
        Console.print(e);
        this.readGameCommand(callback);
      }
    });
  },
};

module.exports = InputView;
