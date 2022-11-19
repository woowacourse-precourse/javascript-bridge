const { Console } = require("@woowacourse/mission-utils");
const { PRINT_FINISH_MSG, SEPARATOR } = require("../Messages/constants");

let upsideBridge = [];
let downsideBridge = [];

const INPUT_UP = "U";
const INPUT_DOWN = "D";

const OutputView = {
  printMap() {
    Console.print(
      `\[ ${upsideBridge.join(SEPARATOR)} \]\n\[ ${downsideBridge.join(
        SEPARATOR
      )} \]\n`
    );
  },

  makeMap(input, isCorrect) {
    this.drawBridge(input, isCorrect);
    this.printMap();
  },

  drawBridge(input, isCorrect) {
    if (input == INPUT_UP) this.drawUpside(isCorrect);
    if (input == INPUT_DOWN) this.drawDownside(isCorrect);
  },

  drawUpside(isCorrect) {
    isCorrect ? upsideBridge.push("O") : upsideBridge.push("X");
    downsideBridge.push(" ");
  },

  drawDownside(isCorrect) {
    isCorrect ? downsideBridge.push("O") : downsideBridge.push("X");
    upsideBridge.push(" ");
  },

  clearMap() {
    upsideBridge = [];
    downsideBridge = [];
  },

  printResult() {
    Console.print(
      `${PRINT_FINISH_MSG}\n\[ ${upsideBridge.join(
        SEPARATOR
      )} \]\n\[ ${downsideBridge.join(SEPARATOR)} \]\n`
    );
    this.clearMap();
  },
};

module.exports = OutputView;
