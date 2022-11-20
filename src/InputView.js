const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const MESSAGE = require('./consts/Input');

const InputView = {
  readBridgeSize() {
    let bridgeSize;
    Console.readLine(MESSAGE.READ_BRIDGE_SIZE, (input) => {
      bridgeSize = Number(input);
      Console.close();
    });

    return bridgeSize;
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
