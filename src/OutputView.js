const { Console } = require("@woowacourse/mission-utils");
const { CONSOLE_MESSAGE } = require("./constants/Message");

const OutputView = {
  printStart() {
    Console.print(CONSOLE_MESSAGE.START);
  },

  printMap(bridgeGame) {
    const map = bridgeGame.getMap();
    Console.print(`[ ${map.upStair.join(" | ")} ]`);
    Console.print(`[ ${map.downStair.join(" | ")} ]\n`);
  },

  printResult(bridgeGame) {
    const result = bridgeGame.getResult();
    const tryNum = bridgeGame.getTry();
    Console.print(CONSOLE_MESSAGE.RESULT);
    this.printMap(bridgeGame);
    Console.print(`게임 성공 여부: ${result}\n`);
    Console.print(`총 시도한 횟수: ${tryNum}`);
    Console.close();
  },
};

module.exports = OutputView;
