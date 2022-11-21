const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE_START } = require('./utils/constant');

const OutputView = {
  printMap(path) {
    Console.print('[' + path.upside.join('|') + ']');
    Console.print('[' + path.downside.join('|') + ']\n');
  },

  printStartGame() {
    Console.print(MESSAGE_START);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
