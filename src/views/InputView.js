const { QUESTION_MESSAGE } = require('../constants');
const { Console } = require('@woowacourse/mission-utils');
const ExceptionHandler = require('../utils/ExceptionHandler');

/** 입력을 담당하는 객체 */
const InputView = {
  /**
   * 다리의 크기를 입력받는다.
   * @param {function} callback 입력이 리턴될 콜백
   */
  readBridgeSize(callback) {
    Console.readLine(QUESTION_MESSAGE.BRIDGE_SIZE, callback);
  },

  /**
   * 건너갈 다리를 입력받는다.
   * @param {function} callback 입력이 리턴될 콜백
   */
  readMoving(callback) {
    Console.readLine(QUESTION_MESSAGE.MOVING, callback);
  },

  /**
   * 게임 커맨드를 입력받는다.
   * @param {function} callback 입력이 리턴될 콜백
   */
  readGameCommand(callback) {
    Console.readLine(QUESTION_MESSAGE.GAME_COMMAND, callback);
  },

  /**
   * 각 타입에 맞게 입력받는다.
   * @param {READ_TYPE} readType 입력받을 타입
   * @param {function} nextCallback 입력이 리턴될 콜백
   */
  read(readType, nextCallback) {
    InputView[`read${readType}`]((inputedValue) => {
      const isValidation = ExceptionHandler.tryValidate(inputedValue, readType);
      if (!isValidation) return this.read(readType, nextCallback);

      nextCallback(inputedValue);
    });
  },
};

module.exports = InputView;
