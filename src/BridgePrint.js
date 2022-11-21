const OutputView = require('./OutputView');

const BridgePrint = {
  printBridge(Bridge) {
    OutputView.printMap(Bridge.getUpBridge(), Bridge.getDownBridge());
  },
  printResult(gamePlay) {
    const result = gamePlay.getPrintParams();
    OutputView.printResult(result);
  },
};

module.exports = BridgePrint;
