const BridgeMaker = require('../../BridgeMaker');
const BridgeRandomNumberGenerator = require('../../BridgeRandomNumberGenerator');

const getMakeBridge = (size) => {
  return BridgeMaker.makeBridge(
    size,
    BridgeRandomNumberGenerator.generate,
  );
}

module.exports = {
  getMakeBridge,
};
