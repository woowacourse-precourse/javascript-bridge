const MissionUtils = require('@woowacourse/mission-utils');
const { makeBridge } = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class Bridge {
  #bridgeSize;

  #bridge;

  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.#bridge = makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  }

  print() {
    MissionUtils.Console.print(JSON.stringify(this.#bridge));
  }
}
module.exports = Bridge;
