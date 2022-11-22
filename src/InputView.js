const { Console } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, ERROR_MESSAGE } = require("./Constant");


/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
 
  /** 2. 다리 길이 입력 문구 출력 및 입력 */
  readBridgeSize(callback) {
    Console.readLine(GUIDE_MESSAGE.INPUT_LENGTH, callback);
  },

  /** 4. 사용자에게 이동할 칸 입력 및 값 출력 */
  readMoving(callback) {
    Console.readLine(GUIDE_MESSAGE.INPUT_MOVE, callback);
  },

  /** 8. 재시도 여부 입력(사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.)
   */
  readGameCommand(callback) {
    Console.readLine(GUIDE_MESSAGE.INPUT_TRY, callback);
  }

};

module.exports = InputView;
