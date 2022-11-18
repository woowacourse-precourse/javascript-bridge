const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constants/Message");
const ValidateInput = require("./ValidateInput");
const BridgeGame = require("./BridgeGame");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * InputView 에서만 MissionUtils의
 * Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.READ_BRIDGE_SIZE, (size) => {
      try {
        ValidateInput.validate(Number(size));
        const solutionBridge = new BridgeGame(size);
      } catch (e) {
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
