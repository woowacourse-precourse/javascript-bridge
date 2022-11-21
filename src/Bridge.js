const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const { Console } = require("@woowacourse/mission-utils");
const { generate } = require("./BridgeRandomNumberGenerator");

class Bridge {
  constructor() {
    this.bridge;
  }

  setBridge(bridgeSize) {
    this.bridge = BridgeMaker.makeBridge(bridgeSize, generate);
    Console.print(this.bridge);
  }

  getBridge() {
    return this.Bridge;
  }
}

module.exports = Bridge;
