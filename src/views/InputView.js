const Console = require('../utils/Console');
const { MESSAGE_QUESTION } = require('../constants/messages');

const InputView = {
  readBridgeSize(initializeGame) {
    Console.readLine(MESSAGE_QUESTION.BRIDGE_SIZE, initializeGame);
  },

  readMoving(movePlayer) {
    Console.readLine(MESSAGE_QUESTION.PLAYER_MOVING, movePlayer);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
