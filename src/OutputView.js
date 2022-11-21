const { Console } = require("@woowacourse/mission-utils");
const Player = require("./Player");
const { OutputConstants } = require("./constant/Constants");

const OutputView = {
  printStart() {
    Console.print(OutputConstants.START_MESSAGE);
  },

  printMap() {
    Console.print(OutputConstants.BRIDGE_STATE(Player.state[0]));
    Console.print(OutputConstants.BRIDGE_STATE(Player.state[1]));
  },

  printResult() {
    Console.print(OutputConstants.RESULT_MESSAGE);
    Console.print(OutputConstants.BRIDGE_STATE(Player.state[0]));
    Console.print(OutputConstants.BRIDGE_STATE(Player.state[1]));
    Console.print("");
    Console.print(OutputConstants.SUCCESS_STATE(Player.gameSuccess));
    Console.print(OutputConstants.TRYING_COUNT(Player.tryingCount));
    Console.close();
  },
};

module.exports = OutputView;
