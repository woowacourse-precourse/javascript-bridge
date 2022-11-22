const Utils = require('../Utils/Utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = Object.freeze({
  GAME_INPUT_MESSAGES: {
    RETRY: '게임을 다시 시도할지 여부를 입력해주세요.',
    MOVE: '이동할 칸을 선택해주세요.',
    BRIDGE: '다리의 길이를 입력해주세요.',
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Utils.input(this.GAME_INPUT_MESSAGES.BRIDGE, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Utils.input(this.GAME_INPUT_MESSAGES.MOVE, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Utils.input(this.GAME_INPUT_MESSAGES.RETRY, callback);
  },
});

module.exports = InputView;
