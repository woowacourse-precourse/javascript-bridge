const { readLine } = require('./utils/util');
const { BRIDGE_SIZE, MOVE, PLAY } = require('./constant/constant');
const MESSAGE = require('./constant/message');
const Validate = require('./utils/validate');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize;
    readLine(MESSAGE.INPUT.BRIDGE_SIZE, (input) => {
      Validate.notNumber(input);
      bridgeSize = Number(input);
      Validate.notInRange(bridgeSize, BRIDGE_SIZE.MAXIMUM, BRIDGE_SIZE.MINIMUM);
    });
    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moveInput;
    readLine(MESSAGE.INPUT.MOVE(MOVE.UP, MOVE.DOWN), (input) => {
      moveInput = input;
      Validate.notAvailableMove(input, Object.values(MOVE));
    });
    return moveInput;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let restartOrQuit;
    readLine(MESSAGE.INPUT.RESTART_OR_QUIT(PLAY.RESTART, PLAY.RESTART), (input) => {
      restartOrQuit = input;
    });
    return restartOrQuit;
  },
};

module.exports = InputView;
