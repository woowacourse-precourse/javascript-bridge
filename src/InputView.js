const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize(settingBridge) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, (size) => {
      settingBridge(size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {

  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {

  },
};

module.exports = InputView;
