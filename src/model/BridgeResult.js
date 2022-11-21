const { POS } = require("../constants/bridge.constants");
const { printMap } = require("../view/OutputView");

class BridgeResult {
  #result;

  constructor(bridge, idx, isPossibleMove) {
    this.#result = this.makeResultBeforeCurrent(bridge, POS.UP, idx);
    this.#result += this.makeCurrent(isPossibleMove, bridge[idx], POS.UP);
    this.#result += "\n";
    this.#result += this.makeResultBeforeCurrent(bridge, POS.DOWN, idx);
    this.#result += this.makeCurrent(isPossibleMove, bridge[idx], POS.DOWN);
  }

  makeResultBeforeCurrent(bridge, direction, idx) {
    return new Array(idx).reduce((acc, _, index) => {
      if (bridge[index] === direction) return (acc += " O " + "|");
      return (acc += "   " + "|");
    }, "[ ");
  }

  makeCurrent(isPossibleMove, curPosition, answerDirection) {
    if (isPossibleMove) {
      if (answerDirection === curPosition) return "O ]";
      return "  ]";
    }
    if (answerDirection === POS.DOWN && curPosition === POS.UP) return "X ]";
    if (answerDirection === POS.UP && curPosition === POS.DOWN) return "X ]";
    return "  ]";
  }

  printMiddleResult() {
    printMap(this.#result);
  }
}
module.exports = BridgeResult;
