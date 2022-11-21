const InputView = require('./InputView');
const OutputView = require('./OutputView');

const BridgeGameController = {
  run(bridgeGame) {
    OutputView.printGreeting();
    BridgeGameController.setBridge(bridgeGame);
  },

  setBridge(bridgeGame) {
    InputView.readBridgeSize((size) => {
      bridgeGame.setBridge(size);
    });
  },
};

module.exports = BridgeGameController;
