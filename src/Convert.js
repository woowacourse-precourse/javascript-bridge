const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

const Convert = {
  convert(direction, solutionBridge, curr) {
    let map = [[], []];
    const checkIndex = new BridgeGame().move(direction, solutionBridge, curr);
    if (checkIndex > curr) {
      this.rigthDirection(curr, direction, map);
    }
    this.wrongDirection(curr, direction, isOk);
    console.log(map);
  },

  rigthDirection(currIndex, direction, map) {
    if (direction === "U") {
      map[0][currIndex].push("O");
      map[1][currIndex].push(" ");
    }
    // OutputView.printMap(currIndex, direction, isOk);
  },

  wrongDirection(currIndex) {},
};

module.exports = Convert;
