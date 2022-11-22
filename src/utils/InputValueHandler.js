const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const OutputView = require('../view/OutputView');
const Validate = require('./Validate');

const InputValueHandler = {
  bridgeSize(size, bridgeGame) {
    const SIZE = Number(size);
    if (!Validate.checkBridgeSize(SIZE)) {
      return false;
    }
    bridgeGame.setAnswerBridge(SIZE, BridgeRandomNumberGenerator.generate);
    return true;
  },

  movingKey(key, bridgeGame) {
    if (!Validate.checkMovingKey(key)) {
      return false;
    }
    bridgeGame.move(key);
    OutputView.printMap(bridgeGame.getUserBridge());
    if (this.checkSuccess(bridgeGame)) return 'success';
    return !this.checkMoveResult(key, bridgeGame);
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
    if (Validate.checkCommandKey(key)) {
      return this.checkRetry(key, bridgeGame);
    }
    return false;
  },

  checkRetry(key, bridgeGame) {
    if (bridgeGame.isRetry(key)) {
      return true;
    }
    OutputView.printResult(bridgeGame, '실패');
    return false;
  },
};

module.exports = InputValueHandler;
