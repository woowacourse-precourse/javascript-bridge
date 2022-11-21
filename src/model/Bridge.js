const { makeBridge } = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { COMMAND, MAP_VALUE } = require('../utils/constant');
const { printMap } = require('../view/OutputView');

class Bridge {
  #bridge;

  #level = 0;

  #map = {};

  constructor(bridgeSize) {
    const defaultArray = this.makeDefaultArray(bridgeSize);
    this.#bridge = makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.#map.up = [...defaultArray];
    this.#map.down = [...defaultArray];
  }

  makeDefaultArray(bridgeSize) {
    // Array(Number(bridgeSize)).fill(' ')가 정상적으로 동작하지 않는 버그가 있어 이 메소드를 사용
    const temp = [];
    for (let index = 0; index < bridgeSize; index += 1) {
      temp.push(' ');
    }
    return temp;
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
