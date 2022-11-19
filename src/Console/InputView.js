const MissionUtils = require('@woowacourse/mission-utils');
const { INPUT, BRIDGE_LENGTH_MIN, BRIDGE_LENGTH_MAX } = require('../Resource');
const BridgeValidator = require('../Bridge.validator');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @return {number} 3이상 20이하의 숫자
   */
  readBridgeSize() {
    let returnValue = '';
    MissionUtils.Console.readLine(INPUT.BRIDGE_LENGTH, (message) => {
      returnValue = message;
    });
    BridgeValidator.checkInputBridgeLength(
      returnValue,
      BRIDGE_LENGTH_MIN,
      BRIDGE_LENGTH_MAX,
    );
    return returnValue;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let returnValue = '';
    MissionUtils.Console.readLine(INPUT.BRIDGE_NEXT, (message) => {
      returnValue = message;
    });
    BridgeValidator.checkInputNext(returnValue);
    return returnValue;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let returnValue = '';
    MissionUtils.Console.readLine(INPUT.BRIDGE_COMMAND, (message) => {
      returnValue = message;
    });
    BridgeValidator.checkGameCommand(returnValue);
    return returnValue;
  },
};

module.exports = InputView;
