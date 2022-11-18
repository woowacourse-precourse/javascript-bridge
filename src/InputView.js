const { Console } = require('@woowacourse/mission-utils');
const { RETRY, PHRASE } = require('./config');
const { validateBridgeSize, validateMove, validateRestart } = require('./validate');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  async fetchWithConsoleRead(phrase, validate) {
    return new Promise((resolve) => {
      Console.readLine(phrase, (input) => {
        try {
          validate(input);
          resolve(input);
        } catch (e) {1
          Console.print(e.message);
          this.fetchWithConsoleRead(phrase, validate).then(resolve);
        }
      });
    });
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    // return new Promise((resolve) =>
    //   Console.readLine(PHRASE.BRIDGE_LEN, (length) => {
    //     validateBridgeSize(length);
    //     resolve(length);
    //   }),
    // );
    const temp = this.fetchWithConsoleRead(PHRASE.BRIDGE_LEN, validateBridgeSize);
    return temp;
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
