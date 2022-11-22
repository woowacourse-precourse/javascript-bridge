const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize = '';
    Console.readLine(MESSAGE.READ_BRIDGE_SIZE, (readInput) => {
      bridgeSize = readInput;
    })
    Console.close();
    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving = '';
    Console.readLine(MESSAGE.READ_MOVING, (readInput) => {
      moving = readInput;
    })
    Console.close();
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let gameCommand = '';
    Console.readLine(MESSAGE.READ_GAME_COMMAND, (readInput) => {
      gameCommand = readInput;
    })
    Console.close();
    return gameCommand;
  },
};

module.exports = InputView;
