const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const ConstValue = require('./ConstValue');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeLength = 0;
    Console.readLine(ConstValue.INPUT_BRIDGE_LENGTH_MESSAGE, value => {
      // 다리 길이 값 검증 함수
      bridgeLength = value;
    });

    return bridgeLength;
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
