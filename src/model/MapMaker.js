const { MAP } = require("../view/stringsUI");

class MapMaker {
  upperBridge;

  lowerBridge;

  constructor(playerMap) {
    this.upperBridge = [];
    this.lowerBridge = [];
    this.createMap(playerMap);
  }

  createMap(playerMap) {
    playerMap.forEach((playerAction, index) => {
      this.divideBridge(index);
      this.createBridgeMap(playerAction);
    });
    this.wrapBridge();
    return this.returnBridge();
  }

  createBridgeMap({ selectedMove, isMove }) {
    if (selectedMove === MAP.UPPER) {
      this.upperBridge.push(MAP[isMove]);
      this.lowerBridge.push(MAP.NONE);
    } else {
      this.lowerBridge.push(MAP[isMove]);
      this.upperBridge.push(MAP.NONE);
    }
  }

  divideBridge(index) {
    if (index > 0) {
      this.upperBridge.push(MAP.DIVIDER);
      this.lowerBridge.push(MAP.DIVIDER);
    }
  }

  wrapBridge() {
    this.upperBridge.unshift(MAP.WRAPPER_LEFT);
    this.upperBridge.push(MAP.WRAPPER_RIGHT);
    this.lowerBridge.unshift(MAP.WRAPPER_LEFT);
    this.lowerBridge.push(MAP.WRAPPER_RIGHT);
  }

  returnBridge() {
    return {
      upperBridge: this.upperBridge,
      lowerBridge: this.lowerBridge,
    };
  }
}

module.exports = MapMaker;
