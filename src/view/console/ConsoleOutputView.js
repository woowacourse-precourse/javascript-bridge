const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('../OutputView');

const ConsoleOutputView = class extends OutputView {
  output(message) {
    Console.print(message);
  }
};

module.exports = ConsoleOutputView;
