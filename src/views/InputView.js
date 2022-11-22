const { Console } = require('@woowacourse/mission-utils');

const MESSAGES = require('../constants/Messages');

const InputView = {
  async readBridgeSize() {
    return this.readLine(MESSAGES.bridgeSize);
  },

  async readMoving() {
    return this.readLine(MESSAGES.command);
  },

  readGameCommand() {
    return this.readLine(MESSAGES.retryOrQuit);
  },

  async readLine(query) {
    return new Promise((resolve) => {
      Console.readLine(query, (input) => resolve(input));
    });
  },
};

module.exports = InputView;
