const BridgeGame = require('../Entity/BridgeGame');
const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../utils/BridgeRandomNumberGenerator');

const GAME_MANAGER = new BridgeGame();
const GameModelController = {
  readBridgeController(length) {
    GAME_MANAGER.setBridge(BridgeMaker.makeBridge(length, generate));
  },

  readMovingController(direction) {
    return GAME_MANAGER.move(direction);
  },

  readRestartCommandController(command) {
    return GAME_MANAGER.retry(command);
  },

  readGameComplete() {
    return GAME_MANAGER.getGameComplete();
  },
};

module.exports = GameModelController;
