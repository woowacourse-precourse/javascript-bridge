const OutputView = require('./OutputView');
const Validate = require('./Validate');

const InputValueControl = {
  bridgeSize(size, bridgeGame) {
    const SIZE = Number(size);
    if (!Validate.checkBridgeSize(SIZE)) {
      return false;
    }
    bridgeGame.getAnswerBridge(SIZE);
    return true;
  },

  movingKey(key, bridgeGame) {
    if (!Validate.checkMovingKey(key)) {
      return false;
    }
    bridgeGame.move(key);
    OutputView.printMap(bridgeGame.getUserBridge());
    return true;
  },

  checkSuccess(bridgeGame) {
    if (bridgeGame.isSuccess()) {
      OutputView.printResult(bridgeGame, '성공');
      return true;
    } else {
      return false;
    }
  },

  checkMoveResult(key, bridgeGame) {
    if (bridgeGame.getMoveResult(key) === 'O') {
      return true;
    } else {
      return false;
    }
  },

  gameCommand(key, bridgeGame) {
    if (!Validate.checkCommandKey(key)) {
      return this.readGameCommand(bridgeGame);
    }
    return this.checkRetry(bridgeGame);
  },

  checkRetry(key, bridgeGame) {
    if (bridgeGame.isRetry(key)) {
      return true;
    } else {
      OutputView.printResult(bridgeGame, '실패');
      return false;
    }
  },
};

module.exports = InputValueControl;
