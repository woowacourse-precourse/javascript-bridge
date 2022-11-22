const InputView = require("./InputView.js");
const OutputView = require("./OutputView.js");

const BridgeUtil = {
  getUserInput(bridgeGame) {
    InputView.readMoving(bridgeGame);
  },
  validateUserInput(bridge, input) {
    let currentIndx = input.length - 1;
    if (input[currentIndx] === bridge[currentIndx]) return true;
    if (input[currentIndx] === bridge[currentIndx]) return true;
    return false;
  },
  printBridge(bridge, input) {
    OutputView.printMap(bridge, input);
  },
  printRetryCommand(bridgeGame) {
    InputView.readGameCommand(bridgeGame);
  },
  printGameResult(bridgeGame) {
    OutputView.printResult(bridgeGame, "성공");
  },
};

module.exports = BridgeUtil;
