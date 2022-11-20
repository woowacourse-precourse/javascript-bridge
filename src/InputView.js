const { Console } = require('@woowacourse/mission-utils');
const { NUMBER, COMMAND, MESSAGE, ERROR, } = require('./BridgeConstant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const bridgeSize = await new Promise(answer => {
      Console.readLine(MESSAGE.BRIDGE_SIZE, answer);
    });
    this.validateBridgeSize(bridgeSize);
    return Number(bridgeSize);
  },

  validateBridgeSize(answer) {
    if (/[^0-9]/g.test(answer)) {
      throw new Error(ERROR.BRIDGE_SIZE_NUMBER);
    }
    if (Number(answer) < NUMBER.BIRDGE_SIZE_MINIMUM || Number(answer) > NUMBER.BIRDGE_SIZE_MAXIMUM) {
      throw new Error(ERROR.BRIDGE_SIZE_RANGE);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const moving = await new Promise(answer => {
      Console.readLine(MESSAGE.MOVING, answer);
    });
    this.validateMoving(moving);
    return moving;
  },

  validateMoving(answer) {
    if (answer !== COMMAND.UP || answer !== COMMAND.DOWN) {
      throw new Error(ERROR.MOVING);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    const gameCommand = await new Promise(answer => {
      Console.readLine(MESSAGE.GAME_COMMAND, answer);
    });
    this.validateGameCommand(gameCommand);
    return gameCommand;
  },

  validateGameCommand(answer) {
    if (answer !== COMMAND.RESTART || answer !== COMMAND.QUIT) {
      throw new Error(ERROR.GAME_COMMAND);
    }
  },

};

module.exports = InputView;
