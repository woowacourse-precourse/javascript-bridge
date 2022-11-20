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
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(INPUT.BRIDGE_LENGTH, (message) => {
      MissionUtils.Console.close();
      try {
        BridgeValidator.checkInputBridgeLength(
          message,
          BRIDGE_LENGTH_MIN,
          BRIDGE_LENGTH_MAX,
        );
      } catch (e) {
        MissionUtils.Console.print(e);
        this.readBridgeSize(callback);
      }
      return callback(message);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, callback) {
    MissionUtils.Console.readLine(INPUT.BRIDGE_NEXT, (message) => {
      MissionUtils.Console.close();
      try {
        BridgeValidator.checkInputNext(message);
      } catch (e) {
        MissionUtils.Console.readLine(e);
        this.readMoving(bridgeGame, callback);
      }
      callback(bridgeGame, message);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, callback) {
    MissionUtils.Console.readLine(INPUT.BRIDGE_COMMAND, (message) => {
      MissionUtils.Console.close();
      try {
        BridgeValidator.checkInputNext(message);
      } catch (e) {
        MissionUtils.Console.readLine(e);
        this.readGameCommand(bridgeGame, callback)
      }
      return callback(bridgeGame, message);
    });
  },
};

module.exports = InputView;
