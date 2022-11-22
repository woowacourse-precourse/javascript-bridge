const { Console } = require("@woowacourse/mission-utils");
const { BRIDGE_SHAPE } = require("./constants");

const OutputView = {
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  },

  printMap(upLineOfBridge, downLineOfBridge) {
    Console.print(upLineOfBridge + BRIDGE_SHAPE.END);
    Console.print(downLineOfBridge + BRIDGE_SHAPE.END);
    Console.print("");
  },

  printResult(lineOfBridge, totalResult, totalTry) {
    Console.print("최종 게임 결과");
    this.printMap(lineOfBridge[0], lineOfBridge[1]);
    Console.print(`게임 성공 여부: ${totalResult}`);
    Console.print(`총 시도한 횟수: ${totalTry}`);
    Console.close();
  },

  printError(errorMessage) {
    Console.print(errorMessage + "\n");
  }
};

module.exports = OutputView;
