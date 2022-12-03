const Bridge = require("./Bridge");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

const BridgeCreator = {
  create(size) {
    const bridge = new Bridge(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
    );
    return bridge;
  },
};

module.exports = BridgeCreator;
