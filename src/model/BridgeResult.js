const { BRIDGE } = require("../constants/bridge.constants");
const { printMap } = require("../view/OutputView");

class BridgeResult {
  result;

  constructor(bridge, idx, isPossibleMove) {
    this.result = this.makeResultBeforeCurrent(bridge, BRIDGE.UP, idx);
    this.result += this.makeCurrent(isPossibleMove, bridge[idx], BRIDGE.UP);
    this.result += "\n";
    this.result += this.makeResultBeforeCurrent(bridge, BRIDGE.DOWN, idx);
    this.result += this.makeCurrent(isPossibleMove, bridge[idx], BRIDGE.DOWN);
  }

  makeResultBeforeCurrent(bridge, direction, idx) {
    return Array.from({ length: idx }).reduce((acc, _, index) => {
      if (bridge[index] === direction) return (acc += "O | ");
      return (acc += "  | ");
    }, "[ ");
  }

  getAnswerWhenPossible(curPos, answer) {
    if (answer === curPos) return "O ]";
    return "  ]";
  }

  getAnswerWhenImPossible(curPos, answer) {
    if (answer === BRIDGE.DOWN && curPos === BRIDGE.UP) return "X ]";
    if (answer === BRIDGE.UP && curPos === BRIDGE.DOWN) return "X ]";
    return "  ]";
  }

  makeCurrent(isPossibleMove, curPos, answer) {
    if (isPossibleMove) return this.getAnswerWhenPossible(curPos, answer);
    return this.getAnswerWhenImPossible(curPos, answer);
  }

  printResult() {
    printMap(this.result);
  }
}
module.exports = BridgeResult;
