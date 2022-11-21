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
      if (bridgeGame.isFinal()) return BridgeGameController.end(bridgeGame);

      BridgeGameController.moveBridge(bridgeGame);
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

  end(bridgeGame) {
    OutputView.printResult();
  },
};

module.exports = BridgeGameController;
