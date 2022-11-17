const { Console } = require('@woowacourse/mission-utils');
const { RETRY, PHRASE } = require('./config');
const { validateBridgeSize, validateMove, validateRestart } = require('./validate');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return new Promise((resolve) =>
      Console.readLine(PHRASE.BRIDGE_LEN, (length) => {
        validateBridgeSize(length);
        resolve(length);
      }),
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    return new Promise((resolve) =>
      Console.readLine(PHRASE.SELECT, (move) => {
        validateMove(move);
        resolve(move);
      }),
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    return new Promise((resolve) =>
      Console.readLine(PHRASE.RESTART, (retry) => {
        validateRestart(retry);
        resolve(retry === RETRY.YES);
      }),
    );
  },
};

module.exports = InputView;
