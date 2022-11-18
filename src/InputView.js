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
        } catch (e) {
          Console.print(e.message);
          this.fetchWithConsoleRead(phrase, validate).then(resolve);
        }
      });
    });
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    return await this.fetchWithConsoleRead(PHRASE.BRIDGE_LEN, validateBridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    return await this.fetchWithConsoleRead(PHRASE.SELECT, validateMove);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    return (await this.fetchWithConsoleRead(PHRASE.RESTART, validateRestart)) === RETRY.YES;
  },
};

module.exports = InputView;
