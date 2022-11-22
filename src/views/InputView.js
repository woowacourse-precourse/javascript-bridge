const Io = require('../utils/io');
const { INPUT } = require('../constants/views');
const { Validator } = require('../utils/validator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    return Io.input(INPUT.BRIDGE_SIZE, (size) => {
      try {
        Validator.isVaildSize(size);
        Io.output('');
        callback(size);
      } catch (error) {
        Io.output(error);
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    return Io.input(INPUT.EITHER_UP_OR_DOWN, (char) => {
      try {
        Validator.isVaildMovingChar(char);
        callback(char);
      } catch (error) {
        Io.output(error);
        this.readMoving(callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    return Io.input(INPUT.RETRY_OR_QUIT, (char) => {
      try {
        Validator.isVaildCommandChar(char);
        callback(char);
      } catch (error) {
        Io.output(error);
        this.readGameCommand(callback);
      }
    });
  },
};

module.exports = InputView;
