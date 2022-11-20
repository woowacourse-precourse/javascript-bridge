const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants');

const InputView = {
  input(message, callback) {
    Console.readLine(message, callback);
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    this.input(GAME_MESSAGE.input_size, callback.bind(this));
  },

  /**
   * 사용자가 이동할 칸을 입력받는다. -> U, D
   */
  readMoving(callback) {
    this.input(GAME_MESSAGE.choose_space, callback.bind(this));
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    this.input(GAME_MESSAGE.replay, callback.bind(this));
  },
};

module.exports = InputView;
