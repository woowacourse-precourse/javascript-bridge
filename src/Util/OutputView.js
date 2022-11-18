const { Console } = require("@woowacourse/mission-utils");
const { PRINT_FINISH_MSG } = require("../Util/constants");

let upperBridge = [];
let lowerBridge = [];

const OutputView = {
  printMap() {
    Console.print(
      `\[ ${upperBridge.join(" | ")} \]\n\[ ${lowerBridge.join(" | ")} \]\n`
    );
  },

  makeMap(answer, idxAndIsCorrect) {
    this.drawBridge(answer, idxAndIsCorrect);
    this.printMap();
  },

  drawBridge(answer, idxAndIsCorrect) {
    if (answer == "U") {
      idxAndIsCorrect[1] ? upperBridge.push("O") : upperBridge.push("X");
      lowerBridge.push(" ");
    }
    if (answer == "D") {
      idxAndIsCorrect[1] ? lowerBridge.push("O") : lowerBridge.push("X");
      upperBridge.push(" ");
    }
  },

  clearMap() {
    upperBridge = [];
    lowerBridge = [];
  },

  printResult() {
    Console.print(PRINT_FINISH_MSG);
    Console.print(
      `\[ ${upperBridge.join(" | ")} \]\n\[ ${lowerBridge.join(" | ")} \]\n`
    );
  },
};

module.exports = OutputView;
