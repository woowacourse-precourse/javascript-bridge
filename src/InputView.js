const { readLine } = require('./utils/ui');
const {
  INPUT_MESSAGE,
  PRINT_MESSAGE,
  MOVE,
  RETRY_OR_QUIT,
} = require('./constants');
const validation = require('./validation');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    readLine(INPUT_MESSAGE.BRIDGE_LENGTH, (length) => {
      validation.bridgeLength(length);
      bridgeGame.getBridge().setComponents(length);
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    readLine(INPUT_MESSAGE.MOVING_DIRECTION, (direction) => {
      validation.moveCommand(direction, MOVE.DIRECTION_UP, MOVE.DIRECTION_DOWN);
      bridgeGame.move(direction);
      if (this.isGameSuccess(bridgeGame)) return bridgeGame.successGameQuit();
      if (bridgeGame.getSelection().getState())
        return this.readMoving(bridgeGame);
      return this.readGameCommand(bridgeGame);
    });
  },

  isGameSuccess(bridgeGame) {
    if (
      bridgeGame.getBridge().getComponents().toString() ===
      bridgeGame.getSelection().getComponents().toString()
    ) {
      bridgeGame.setSuccessState(PRINT_MESSAGE.SUCCESS);
      return true;
    }
    return false;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    readLine(INPUT_MESSAGE.RETRY_OR_QUIT, (command) => {
      validation.retryOrQuitCommand(
        command,
        RETRY_OR_QUIT.RETRY,
        RETRY_OR_QUIT.QUIT
      );
      bridgeGame.retry(command);
    });
  },
};

module.exports = InputView;
