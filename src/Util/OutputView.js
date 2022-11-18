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

  makeMap(answer, isCorrect) {
    this.drawBridge(answer, isCorrect);
    this.printMap();
  },

  drawBridge(answer, isCorrect) {
    if (answer == "U") {
      isCorrect ? upperBridge.push("O") : upperBridge.push("X");
      lowerBridge.push(" ");
    }
    if (answer == "D") {
      isCorrect ? lowerBridge.push("O") : lowerBridge.push("X");
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
    this.clearMap();
  },
};

module.exports = OutputView;
