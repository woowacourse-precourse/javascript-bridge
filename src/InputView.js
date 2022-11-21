const { readLine } = require('./utils/util');
const { BRIDGE_SIZE, MOVE, PLAY } = require('./constant/constant');
const MESSAGE = require('./constant/message');
const Validate = require('./utils/validate');
const { print } = require('./utils/util');

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
      bridgeSize = Number(input);
    });
    return bridgeSize;
  },

  /**
   * 다리의 길이가 제대로 될 때까지 입력받는다.
   */
  getBridgeSize() {
    const bridgeSize = this.readBridgeSize();
    if (
      Validate.notNumber(bridgeSize) &&
      Validate.notInRange(bridgeSize, BRIDGE_SIZE.MAXIMUM, BRIDGE_SIZE.MINIMUM)
    ) {
      return bridgeSize;
    }
    this.getBridgeSize();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let move;
    readLine(MESSAGE.INPUT.MOVE(MOVE.UP, MOVE.DOWN), (input) => {
      move = input;
    });
    return move;
  },

  /**
   * 사용자가 이동할 칸이 제대로 될 때까지 입력받는다.
   */
  getMoving() {
    const move = this.readMoving();
    if (Validate.notAvailableMove(move, Object.values(MOVE))) {
      return move;
    }
    this.readMoving();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let gameCommand;
    readLine(MESSAGE.INPUT.RESTART_OR_QUIT(PLAY.RESTART, PLAY.QUIT), (input) => {
      gameCommand = input;
    });
    return gameCommand;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 제대로 될 때까지 입력받는다.
   */
  getMGameCommand() {
    const gameCommand = this.readGameCommand();
    if (Validate.notAvailablePlay(gameCommand, Object.values(PLAY))) {
      return gameCommand;
    }
    this.readGameCommand();
  },
};

module.exports = InputView;
