const MissionUtils = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('./Constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(OUTPUT_MESSAGE.BRIDGE_SIZE, input => {
      try {
        callback(Number(input));
      } catch (e) {
        MissionUtils.Console.print(e.message);
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    MissionUtils.Console.readLine(OUTPUT_MESSAGE.MOVING, input => {
      try {
        callback(input);
      } catch (e) {
        MissionUtils.Console.print(e.message);
        this.readMoving(callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    MissionUtils.Console.readLine(OUTPUT_MESSAGE.RESTART, input => {
      try {
        callback(input);
      } catch (e) {
        MissionUtils.Console.print(e.message);
        this.readGameCommand(callback);
      }
    });
  },
};

module.exports = InputView;
