const MissionUtils = require("@woowacourse/mission-utils");
const Vaildation = require("./Vaildation");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  MINIMUM_BRIDGE_SIZE: 3,
  MAXIMUM_BRIDGE_SIZE: 20,
  
  readBridgeSize( callback ) {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
      const size = Number(answer);
      vaildation_bridgeSize(size);
      
      callback(size);
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

function vaildation_bridgeSize(size) {
  Vaildation.isNumber(size);
  Vaildation.inRange(size, InputView.MINIMUM_BRIDGE_SIZE, InputView.MAXIMUM_BRIDGE_SIZE);
}

module.exports = InputView;
