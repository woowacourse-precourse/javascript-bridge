const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printMap(bridgeList) {
    const upperBlock = bridgeList[0].join(" | ");
    const lowerBlock = bridgeList[1].join(" | ");
    Console.print(`[ ${upperBlock} ]`);
    Console.print(`[ ${lowerBlock} ]`);
  },

  printResult(bridgeList, result, attempts) {
    Console.print(`\n최종 게임 결과`);
    this.printMap(bridgeList);
    Console.print(`\n게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${attempts}`);
    Console.close();
  },
};

module.exports = OutputView;
