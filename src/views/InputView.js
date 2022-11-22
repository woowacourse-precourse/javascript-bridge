const { Console } = require('@woowacourse/mission-utils');
const { validateBridgeSize, validateGameCommand, validateTile } = require('../validators');
const Messages = require('../intl/Messages');
const ValidationError = require('../errors/ValidationError');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * Console.readLine을 사용하여 값을 입력받는다.
   *
   * @param {string} query
   * @param {function(string)} callback
   */
  read(query, callback) {
    Console.print('');
    Console.print(query);
    Console.readLine('', (value) => {
      if (!this.onRead(value, callback)) {
        this.read(query, callback);
      }
    });
  },

  onRead(value, callback) {
    try {
      callback(value);
    } catch (error) {
      this.onReadError(error);
      return false;
    }
    return true;
  },

  onReadError(error) {
    if (error instanceof ValidationError) {
      Console.print(error.message);
      return;
    }
    throw error;
  },

  /**
   * 다리의 길이를 입력받는다.
   *
   * @param {function(number)} callback
   */
  readBridgeSize(callback) {
    this.read(Messages.READ_BRIDGE_SIZE, (value) => {
      callback(validateBridgeSize(value).get());
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   *
   * @param {function(string)} callback
   */
  readMoving(callback) {
    this.read(Messages.READ_MOVING, (value) => {
      callback(validateTile(value).get());
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   *
   * @param {function(string)} callback
   */
  readGameCommand(callback) {
    this.read(Messages.READ_GAME_COMMAND, (value) => {
      callback(validateGameCommand(value).get());
    });
  },

  /**
   * 콘솔 입력을 종료한다.
   */
  close() {
    Console.close();
  },
};

module.exports = InputView;
