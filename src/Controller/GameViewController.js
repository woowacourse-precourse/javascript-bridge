const OutputView = require('./OutputView');

const GameViewController = {
  viewStateReset() {
    OutputView.initResult();
  },

  printMapController(command, bridgeIndexInfo) {
    OutputView.printMap(command, bridgeIndexInfo);
  },

  printResultController(gameComplete, gameTryCount) {
    OutputView.printResult(gameComplete, gameTryCount);
  },

  resultOutputController() {
    OutputView.endResult();
  },
};

module.exports = GameViewController;
