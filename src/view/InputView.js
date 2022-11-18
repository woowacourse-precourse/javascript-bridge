const BridgeSize = require('../model/BridgeSize');
const { Console } = require('@woowacourse/mission-utils');
const MovementVadlidation = require('../model/MovementValidaion');

// view는 받아오는 데이터에 따라 처리가 다를 때만 model를 불러온다

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(bridgeSize) {
    try {
      return new BridgeSize(bridgeSize).showValidateResult();
    } catch (error) {
      Console.print(error);
      return false;
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(movement) {
    try {
      return new MovementVadlidation(movement).showValidationResult();
    } catch (error) {
      Console.print(error);
      return false;
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
