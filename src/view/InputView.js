/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE } = require("../utils/Constants");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    return Console.readLine(GAME_MESSAGE.INPUT_BRIDGE_LENGTH, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    return Console.readLine(GAME_MESSAGE.INPUT_BRIDGE_SPACE_TO_MOVE, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    return Console.readLine(GAME_MESSAGE.RESTART_OR_QUIT, callback);
  },
};

module.exports = InputView;
