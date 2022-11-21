const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/BridgeGameMessage');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  gameStart() {
    Console.print(MESSAGE.PROCESS.GAME_START);
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.PROCESS.ENTER_BRIDGE_LENGTH, (length) => {
      Console.print(`다리길이 ${length}`);
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

Console.print(InputView.readBridgeSize());

module.exports = InputView;
