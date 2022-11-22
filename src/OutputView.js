const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");

const OutputView = {
  printMap(bridgeMap) {
    Console.print(bridgeMap[0]);
    Console.print(bridgeMap[1]);
  },

  printResult(bridgeMap, message, tryCount) {
    Console.print("최종 게임 결과");
    this.printMap(bridgeMap);
    Console.print(`게임 성공 여부: ${message}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },
};

module.exports = OutputView;
