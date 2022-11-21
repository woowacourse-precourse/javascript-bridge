const { Console } = require("@woowacourse/mission-utils");
const Player = require("./Player");

const OutputView = {
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  },

  printMap() {
    Console.print(`[${Player.state[0].join("|")}]`);
    Console.print(`[${Player.state[1].join("|")}]`);
  },

  printResult() {},
};

module.exports = OutputView;
