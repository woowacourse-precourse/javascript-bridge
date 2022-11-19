const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require("./data/Constants");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(afterGetSize) {
    Console.readLine(INPUT.GET_INPUT_BRIDGE_SIZE, afterGetSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(afterGetMoveing) {
    Console.readLine(INPUT.GET_INPUT_MOVING, afterGetMoveing);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(afterGetCommand) {
    Console.readLine(INPUT.GET_INPUT_GAME_COMMAND, afterGetCommand);
  },
};

module.exports = InputView;
