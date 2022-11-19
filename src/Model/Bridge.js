const BridegMaker = require("../BridgeMaker");
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

class Bridge {
  #bridgeLength;
  constructor(bridgeLength) {
    this.setBridgeLength(bridgeLength);
    this.buildBridge();
  }
  setBridgeLength(bridgeLength) {
    this.#bridgeLength = bridgeLength;
  }

  buildBridge() {
    const RES = BridegMaker.makeBridge(
      this.#bridgeLength,
      generateRandomNumber
    );
  }
}

module.exports = Bridge;
