const { printMap } = require("../view/OutputView");

class BridgeResult {
  #result;

  constructor(bridge, idx, isPossibleMove) {
    this.#result = this.makeResultBeforeCurrent(bridge, "U", idx);
    this.#result += this.makeCurrent(isPossibleMove, bridge[idx], "U");
    this.#result += "\n";
    this.#result += this.makeResultBeforeCurrent(bridge, "D", idx);
    this.#result += this.makeCurrent(isPossibleMove, bridge[idx], "D");
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
    if (answerDirection === "D" && curPosition === "U") return "X ]";
    if (answerDirection === "U" && curPosition === "D") return "X ]";
    return "  ]";
  }

  printMiddleResult() {
    printMap(this.#result);
  }
}
module.exports = BridgeResult;
