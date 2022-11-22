const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constant');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * @param {Function} callBack
   * @desc 다리의 길이를 입력 받는 역할
   */
  readBridgeSize(callBack) {
    try {
      Console.readLine(MESSAGE.INPUT_SIZE, callBack);
    } catch (error) {
      Console.print(`[error] ${error.message}`);
    }
  },

  /**
   * @param {Function} callBack
   * @desc 다리를 건널때 사용자의 이동을 입력 받는 역할
   */
  readMoving(callBack) {
    try {
      Console.readLine(MESSAGE.INPUT_MOVE, callBack);
    } catch (error) {
      Console.print(`[error] ${error.message}`);
    }
  },

  /**
   * @param {Function} callBack
   * @desc 게임을 종료,재시작 커맨드를 입력 받는 역할
   */
  readGameCommand(callBack) {
    try {
      Console.readLine(MESSAGE.INPUT_COMMAND, callBack);
    } catch (error) {
      Console.print(`[error] ${error.message}`);
    }
  },
};

module.exports = InputView;
