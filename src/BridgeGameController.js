const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { COMMAND } = require('./constants');

const BridgeGameController = {
  run(bridgeGame) {
    OutputView.printGreeting();
    BridgeGameController.setBridge(bridgeGame);
  },

  setBridge(bridgeGame) {
    InputView.readBridgeSize((size) => {
      bridgeGame.setBridge(Number(size));
      BridgeGameController.moveBridge(bridgeGame);
    });
  },

  moveBridge(bridgeGame) {
    InputView.readMoving((moving) => {
      bridgeGame.move(moving);
      OutputView.printMap(bridgeGame.getMap());
      BridgeGameController.judge(bridgeGame);
    });
  },

  judge(bridgeGame) {
    if (!bridgeGame.isSuccess()) return BridgeGameController.askRetry(bridgeGame);
    if (bridgeGame.isFinal()) return BridgeGameController.end(bridgeGame);

    BridgeGameController.moveBridge(bridgeGame);
  },

  askRetry(bridgeGame) {
    InputView.readGameCommand((command) => {
      if (command === COMMAND.RETRY) return BridgeGameController.retry(bridgeGame);
      if (command === COMMAND.QUIT) return BridgeGameController.end(bridgeGame);
    });
  },

  retry(bridgeGame) {
    bridgeGame.retry();
    BridgeGameController.moveBridge(bridgeGame);
  },

  end(bridgeGame) {
    const result = bridgeGame.getResult();
    const map = bridgeGame.getMap();
    OutputView.printResult({ map, result });
  },
};

module.exports = BridgeGameController;
