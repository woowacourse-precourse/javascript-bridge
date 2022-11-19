const MissionUtils = require('@woowacourse/mission-utils');
const { makeBridge } = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class Bridge {
  #bridgeSize;

  #bridge;

  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.#bridge = makeBridge(bridgeSize, this.generateRandomNumber);
  }

  generateRandomNumber() {
    const generatedPlace = BridgeRandomNumberGenerator.generate(); // 0이면 위, 1이면 아래
    return generatedPlace;
  }

  print() {
    MissionUtils.Console.print(JSON.stringify(this.#bridge));
  }
}
module.exports = Bridge;
