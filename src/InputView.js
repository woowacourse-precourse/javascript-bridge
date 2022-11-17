/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE_INPUT } = require('./MESSAGES/InputMessage');
const { RE_START_MESSAGE, MOVE_MESSAGE } = require('./MESSAGES/GameMessage');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    let bridgeSize;
    Console.readLine(BRIDGE_INPUT, (inputbridgeSize) => {
      bridgeSize = inputbridgeSize;
    });
    return bridgeSize;
  },

  readRegame() {
    let reGame;
    Console.readLine(RE_START_MESSAGE, (inputreGame) => {
      reGame = inputreGame;
    });
    return reGame;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving;
    Console.readLine(MOVE_MESSAGE, (inputMoving) => {
      moving = inputMoving;
    });
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
