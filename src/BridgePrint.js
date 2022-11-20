const OutputView = require('./OutputView');

const BridgePrint = {
  printBridge(Bridge) {
    OutputView.printMap(Bridge.getUpBridge(), Bridge.getDownBridge());
  },
  printResultByGamePlay(gamePlay) {
    const result = gamePlay.getPrintParams();
    OutputView.printResult(result);
  },
  printResult(player, bridge) {
    OutputView.printResult([player, bridge]);
  },
};

module.exports = BridgePrint;
