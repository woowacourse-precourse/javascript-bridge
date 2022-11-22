const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class Bridge {
  make(size) {
    return BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }
  paint() {

  }
 
}

module.exports = Bridge;