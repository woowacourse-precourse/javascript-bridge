const { Console } = require('@woowacourse/mission-utils');
const { GAME_MSG, COMMON } = require('../common/Constant');
const {
  validateBridgeLength,
  validateMove,
  validateRetry,
} = require('../utils/Validator');
const OutputView = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(cb) {
    Console.readLine(GAME_MSG.enterLength + COMMON.newLine, (input) => {
      try {
        validateBridgeLength(input);
        cb(input);
      } catch (e) {
        OutputView.printError(e);
        InputView.readBridgeSize(cb);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(cb) {
    Console.readLine(GAME_MSG.enterToMove + COMMON.newLine, (input) => {
      try {
        validateMove(input);
        cb(input);
      } catch (e) {
        OutputView.printError(e);
        InputView.readMoving(cb);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(cb) {
    Console.readLine(GAME_MSG.enterRetry + COMMON.newLine, (input) => {
      try {
        validateRetry(input);
        cb(input);
      } catch (e) {
        OutputView.printError(e);
        InputView.readGameCommand(cb);
      }
    });
  },
};

module.exports = InputView;
