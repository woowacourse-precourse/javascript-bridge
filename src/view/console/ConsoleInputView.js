const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../InputView');

const ConsoleInputView = class extends InputView {
  input(message, callback) {
    Console.readLine(message, callback);
  }
};

module.exports = ConsoleInputView;
