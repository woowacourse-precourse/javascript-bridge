const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const makeBridge = BridgeMaker.makeBridge;
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const generate = BridgeRandomNumberGenerator.generate;

const BridgeGameSetter = (num) => {
  const bridge = makeBridge(num, generate);
  const bridgeGame = new BridgeGame(bridge);
  return bridgeGame;
};

module.exports = BridgeGameSetter;
