const MapMaker = require("../MapMaker");

class Player {
  #inputArr;

  #bridgeMap;

  #totalTrial;

  constructor() {
    this.#inputArr = [];
    this.#bridgeMap = { upperBridge: [], lowerBridge: [] };
    this.#totalTrial = 1;
  }

  getInputArrayItem(index) {
    return this.#inputArr[index];
  }

  getInputArrayLength() {
    return this.#inputArr.length;
  }

  addInputArrayItem(itemObj) {
    this.#inputArr.push(itemObj);
  }

  createBridgeMap() {
    this.#bridgeMap = new MapMaker(this.#inputArr);
  }

  getBridgeMap() {
    return this.#bridgeMap.getBridge();
  }

  resetPlayer() {
    this.#inputArr = [];
    this.#bridgeMap.resetBridge();
  }

  addTotalTrial() {
    this.#totalTrial += 1;
  }
  getTotalTrial() {
    return this.#totalTrial;
  }
}
module.exports = Player;
