const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printStartMent() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  },

  printMap({ topBridge, bottomBridge }) {
    Console.print(`[ ${topBridge.join(" | ")} ]`);
    Console.print(`[ ${bottomBridge.join(" | ")} ]`);
  },

  printResult({ topBridge, bottomBridge }, retryCount, successOrFailure) {
    Console.print("\n최종 게임 결과");
    this.printMap({ topBridge, bottomBridge });
    Console.print(`\n게임 성공 여부: ${successOrFailure}`);
    Console.print(`총 시도한 횟수: ${retryCount}`);
  },
};

module.exports = OutputView;
