const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./utils/Validator');
const {INPUT_MESSAGES} = require('./utils/Constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const bridgeSize = await new Promise (answer => {
      Console.readLine(INPUT_MESSAGES.BRIDGE_SIZE, answer);
    })
    Console.close();
    try{
      Validator.validateBridgeSize(bridgeSize);
    } catch {
      this.readBridgeSize();
    }
    return bridgeSize
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const moving = await new Promise (answer => {
      Console.readLine(INPUT_MESSAGES.BRIDGE_MOVE, answer)
    });
    Console.close();
    Validator.validateMoving(moving)
    return moving
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
   async readGameCommand() {
    const decide = await new Promise (answer => {
      Console.readLine(INPUT_MESSAGES.RESTART, answer);
    })
    Console.close();
    Validator.validateRestart(decide);
    return decide
  },
};

module.exports = InputView;
