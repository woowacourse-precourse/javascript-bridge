const MissionUtils = require('@woowacourse/mission-utils');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class Bridge {
  #bridgeSize;

  #up = [];

  #down = [];

  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.generateNumbers();
  }

  generateNumbers() {
    for (let index = 0; index < this.#bridgeSize; index += 1) {
      const generatedPlace = BridgeRandomNumberGenerator.generate(); // 0이면 위, 1이면 아래
      this.pushToArray(generatedPlace);
    }
  }

  pushToArray(generatedPlace) {
    if (generatedPlace === 0) {
      this.#up.push(true);
      this.#down.push(false);
    } else { // else deprecated
      this.#up.push(false);
      this.#down.push(true);
    }
  }

  print() {
    MissionUtils.Console.print(JSON.stringify(this.#up).replaceAll(',', ' | '));
    MissionUtils.Console.print(JSON.stringify(this.#down).replaceAll(',', ' | '));
  }
}
module.exports = Bridge;
