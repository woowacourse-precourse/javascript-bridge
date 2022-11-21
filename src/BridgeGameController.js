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
      BridgeGameController.moveBridge(bridgeGame);
    });
  },

  moveBridge(bridgeGame) {
    InputView.readMoving((moving) => {});
  },
};

module.exports = BridgeGameController;
