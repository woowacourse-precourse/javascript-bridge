const MissionUtils = require('@woowacourse/mission-utils');
const { makeBridge } = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { printMap } = require('../view/OutputView');

class Bridge {
  #bridge;

  constructor(bridgeSize) {
    this.#bridge = makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  }

  print() {
    MissionUtils.Console.print(JSON.stringify(this.#bridge)); // deprecated
  }

  getLength() {
    return this.#bridge.length;
  }

  checkBridge(index, command) {
    printMap(this.#bridge, index);
    return this.#bridge[index] === command;
  }
}
module.exports = Bridge;
