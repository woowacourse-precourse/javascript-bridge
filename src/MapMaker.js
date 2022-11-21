const { MAP } = require("./view/stringsUI");

class MapMaker {
  #upperBridge;

  #lowerBridge;

  constructor(playerArr) {
    this.#upperBridge = [];
    this.#lowerBridge = [];
    this.createMap(playerArr);
  }

  createMap(playerArr) {
    playerArr.forEach((playerAction, index) => {
      this.divideBridge(index);
      this.handlePlayerAction(playerAction);
    });
    this.wrapBridge();
    return this.getBridge();
  }

  handlePlayerAction({ selectedMove, isCrossBridge }) {
    if (selectedMove === MAP.UPPER) {
      this.#upperBridge.push(MAP[isCrossBridge]);
      this.#lowerBridge.push(MAP.NONE);
    } else {
      this.#lowerBridge.push(MAP[isCrossBridge]);
      this.#upperBridge.push(MAP.NONE);
    }
  }

  divideBridge(index) {
    if (index > 0) {
      this.#upperBridge.push(MAP.DIVIDER);
      this.#lowerBridge.push(MAP.DIVIDER);
    }
  }

  wrapBridge() {
    this.#upperBridge.unshift(MAP.WRAPPER_LEFT);
    this.#upperBridge.push(MAP.WRAPPER_RIGHT);
    this.#lowerBridge.unshift(MAP.WRAPPER_LEFT);
    this.#lowerBridge.push(MAP.WRAPPER_RIGHT);
  }

  getBridge() {
    return {
      upperBridge: this.#upperBridge,
      lowerBridge: this.#lowerBridge,
    };
  }

  resetBridge() {
    this.#upperBridge = [];
    this.#lowerBridge = [];
  }
}

module.exports = MapMaker;
