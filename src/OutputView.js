const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./Constants");

const OutputView = {
  printInitGame() {
    Console.print(GAME_MESSAGES.START_GAME);
  },

  printMap() {},

  printResult() {},
};

module.exports = OutputView;
