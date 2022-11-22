const {Console} = require("@woowacourse/mission-utils");
const {checkBridgeSize} = require("./Validation");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
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

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (side) => {
      try {
        checkMoving(side);
        callback(side);
      } catch (e) {
        Console.print(e);
        this.readMoving(callback);
      }
      
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
