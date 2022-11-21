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
    InputView.readMoving((moving) => {
      bridgeGame.move(moving);

      if (!bridgeGame.isSuccess()) return BridgeGameController.askRetry(bridgeGame);
    });
  },

  askRetry(bridgeGame) {
    InputView.readGameCommand((command) => {
      if (command === 'R') return BridgeGameController.retry(bridgeGame);
    });
  },

  retry(bridgeGame) {
    bridgeGame.retry();
    BridgeGameController.moveBridge(bridgeGame);
  },
};

module.exports = BridgeGameController;
