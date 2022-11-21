const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./utils/BridgeRandomNumberGenerator.js');

const Bridge = require('./Bridge.js');

class Builder {
  buildBridge(size) {
    const directionSymbols = makeBridge(Number(size), generate);

    return new Bridge(directionSymbols);
  }
}

module.exports = Builder;
