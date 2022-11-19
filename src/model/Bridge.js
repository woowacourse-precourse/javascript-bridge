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
      this.pushToArray(generatedPlace === 0);
    }
  }

  pushToArray(bool) {
    this.#up.push(bool);
    this.#down.push(!bool);
  }



  print() {
    MissionUtils.Console.print(JSON.stringify(this.#up).replaceAll(',', ' | '));
    MissionUtils.Console.print(JSON.stringify(this.#down).replaceAll(',', ' | '));
  }
}
module.exports = Bridge;
