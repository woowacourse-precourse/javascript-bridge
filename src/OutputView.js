const { Console } = require("@woowacourse/mission-utils");
const { RESULT_MESSAGES, GAME_MESSAGES } = require("./Constants");

const OutputView = {
  printInitGame() {
    Console.print(GAME_MESSAGES.START_GAME);
  },

  printError(error) {
    Console.print(error);
  },

  printMap(value) {
    Console.print(RESULT_MESSAGES.PRINT_MAP(value));
  },

  printEndGame() {
    Console.print(RESULT_MESSAGES.PRINT_END_GAME);
  },

  printResult(count, value) {
    Console.print(RESULT_MESSAGES.PRINT_COUNT(count));
    Console.print(RESULT_MESSAGES.PRINT_SUCCESS_OR_FAILURE(value));
    Console.close();
  },
};

module.exports = OutputView;
