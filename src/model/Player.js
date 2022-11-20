const MapMaker = require("../MapMaker");

class Player {
  inputArr;

  bridgeMap;

  #totalTrial;

  constructor() {
    this.inputArr = [];
    this.bridgeMap = { upperBridge: null, lowerBridge: null };
    this.#totalTrial = 1;
  }

  createBridgeMap(bridgeGamePresenter) {
    this.bridgeMap = new MapMaker(this.inputArr);
    bridgeGamePresenter.printMove();
  }

  resetPlayer() {
    this.inputArr = [];
    this.bridgeMap = { upperBridge: null, lowerBridge: null };
  }

  addTotalTrial() {
    this.#totalTrial += 1;
  }
  getTotalTrial() {
    return this.#totalTrial;
  }
}
module.exports = Player;
