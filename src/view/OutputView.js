const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const OutputMessage = require("../static/OutputMessage");

const OutputView = {
  printOpening() {
    Console.print(`${OutputMessage.opening}\n`);
  },

  printMap(map) {
    Console.print(map);
  },

  printLineBreak() {
    Console.print('');
  },

  printResultPhrases() {
    Console.print(`${OutputMessage.resultMap}`);
  },

  printSuccess(successResult) {
    Console.print(`\n${OutputMessage.success}${successResult}`);
  },

  printAttempts(attempts) {
    Console.print(`${OutputMessage.attempts}${attempts}`);
    Console.close();
  },

  printError(e) {
    Console.print(e + '\n');
  },
};

module.exports = OutputView;
