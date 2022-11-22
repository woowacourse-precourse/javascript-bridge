const { makeBridge } = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { COMMAND, MAP_VALUE } = require('../utils/constant');
const { printMap } = require('../view/OutputView');

class Bridge {
  #bridge;

  #level = 0;

  #map = {};

  constructor(bridgeSize) {
    const defaultArray = ' '.repeat(bridgeSize).split('');
    this.#bridge = makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.#map.up = [...defaultArray];
    this.#map.down = [...defaultArray];
  }

  getLength() {
    return this.#bridge.length;
  }

  getLevel() {
    return this.#level;
  }

  getMap() {
    return this.#map;
  }

  checkBridge(index, command) {
    this.#level = index;
    const comparison = this.#bridge[index] === command;
    this.updateMap(index, command, comparison ? MAP_VALUE.HIT : MAP_VALUE.MISS);
    printMap(index, this.#map);
    return comparison;
  }

  updateMap(index, command, marker) {
    if (command === COMMAND.UP) {
      this.#map.up[index] = marker;
      this.#map.down[index] = MAP_VALUE.EMPTY;
    }
    if (command === COMMAND.DOWN) {
      this.#map.up[index] = MAP_VALUE.EMPTY;
      this.#map.down[index] = marker;
    }
  }
}
module.exports = Bridge;
