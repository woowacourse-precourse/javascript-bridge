const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE_START, MESSAGE_OUTPUT } = require('./utils/constant');

const OutputView = {
  printStartGame() {
    Console.print(MESSAGE_START);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printMap(path) {
    Console.print(MESSAGE_OUTPUT.MAP(path.upside.join('|')));
    Console.print(MESSAGE_OUTPUT.MAP(path.downside.join('|')) + '\n');
  },

  printResult(path, gameResult, attempts) {
    Console.print(MESSAGE_OUTPUT.RESULT);
    OutputView.printMap(path);

    Console.print(MESSAGE_OUTPUT.GAME_SUCCESS + gameResult);
    Console.print(MESSAGE_OUTPUT.ATTEMPTS + attempts);
    Console.close();
  },
};

module.exports = OutputView;
