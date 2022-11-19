const {Console} = require("@woowacourse/mission-utils");
const {checkBridgeSize} = require("./Validation");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  bridgeSize:0,

  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.', (size) => {
      checkBridgeSize(size);
      bridgeSize = size;
    });
    return this.bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  sideInput:0,
  readMoving() {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (side) => {
      sideInput = side;
      console.log(side);
    });
    return this.sideInput;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
