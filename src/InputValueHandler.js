const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const Validate = require('./Validate');

const InputValueControl = {
  bridgeSize(size, bridgeGame) {
    const SIZE = Number(size);
    if (!Validate.checkBridgeSize(SIZE)) {
      return false;
    }
    bridgeGame.getAnswerBridge(SIZE, BridgeRandomNumberGenerator.generate);
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
    }
    return false;
  },

  checkMoveResult(key, bridgeGame) {
    if (bridgeGame.getMoveResult(key) === 'O') {
      return true;
    }
    return false;
  },

  gameCommand(key, bridgeGame) {
    if (Validate.checkCommandKey(key) && this.checkRetry(key, bridgeGame)) {
      return true;
    }
    return false;
  },

  checkRetry(key, bridgeGame) {
    if (bridgeGame.isRetry(key)) {
      return true;
    }
    return false;
  },
};

module.exports = InputValueControl;
