const OutputView = require('./OutputView');

const BridgePrint = {
  printBridge(uparray, downarray) {
    OutputView.printMap(uparray, downarray);
  },
  printResult(gamePlay) {
    const result = gamePlay.getPrintParams();
    OutputView.printResult(result);
  },
};

module.exports = BridgePrint;
