const MissionUtils = require("@woowacourse/mission-utils");
const InputMessage = require("./utils/const/inputViewMessage");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(InputMessage.readBridgeSize, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    MissionUtils.Console.readLine(InputMessage.readMoving, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    MissionUtils.Console.readLine(InputMessage.readGamdCommand, callback);
  },

  close() {
    MissionUtils.Console.close();
  },
};

module.exports = InputView;
