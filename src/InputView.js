const { Console } = require('@woowacourse/mission-utils')
const { Random } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const { QUESTION } = require('./constants/messages');
const Validation = require('./Validation')
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(QUESTION.BRIDGE_LENGTH,(input)=>{
      Validation.validationForBridgeLength(input)
      BridgeMaker.makeBridge(input,BridgeRandomNumberGenerator.generate)
    })
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
