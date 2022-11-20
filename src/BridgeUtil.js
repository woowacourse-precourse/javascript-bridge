const { Console, Random } = require("@woowacourse/mission-utils");
const InputView = require("./InputView.js");
const OutputView = require("./OutputView.js");
const BridgeUtil = {
  getUserInput(bridgeGame) {
    InputView.readMoving(bridgeGame);
  },
  validateUserInput(bridge, input) {
    let currentIndx = input.length - 1;
    if (input[currentIndx] === "U" && bridge[currentIndx] === 1) return true;
    if (input[currentIndx] === "D" && bridge[currentIndx] === 0) return true;
    return false;
  },
  printBridge(bridge, input) {
    OutputView.printMap(bridge, input);
  },
};

module.exports = BridgeUtil;
