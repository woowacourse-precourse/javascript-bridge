const MapMaker = require("../MapMaker");

class Player {
  inputArr;

  bridgeMap;

  constructor() {
    this.inputArr = [];
    this.bridgeMap = { upperBridge: null, lowerBridge: null };
  }

  createBridgeMap(bridgeGamePresenter) {
    this.bridgeMap = new MapMaker(this.inputArr);
    bridgeGamePresenter.printMove();
  }

  resetPlayer() {
    this.inputArr = [];
    this.bridgeMap = { upperBridge: null, lowerBridge: null };
  }
}
module.exports = Player;
