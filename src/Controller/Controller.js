const { GAME_CLEAR, GAME_OVER } = require('../Constant/Constants');
const BridgeGame = require('../Model/BridgeGame');
const OutputView = require('../View/OutputView');

const Controller = {
  makeBridgeGame(bridgeSize) {
    const bridgeGame = new BridgeGame();
    bridgeGame.initGame(bridgeSize);
    return bridgeGame;
  },

  sendUserMoving(userMoving, bridgeGame) {
    const message = bridgeGame.move(userMoving);
    const map = bridgeGame.makeMap();
    OutputView.printMap(map);
    if (message === GAME_CLEAR) {
      const statistic = bridgeGame.makeStatistic();
      OutputView.printResult(map, statistic);
    }
    return message;
  },

  sendGameCommand(command, bridgeGame) {
    const isRetry = bridgeGame.retry(command);
    if (!isRetry) {
      const map = bridgeGame.makeMap();
      const statistic = bridgeGame.makeStatistic();
      OutputView.printResult(map, statistic);
    }
    return isRetry;
  },
};

module.exports = Controller;
