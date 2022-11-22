const { Console } = require("@woowacourse/mission-utils");

class BridgeGame {
  constructor() {
    this.mapIndex = 0;
    this.map = [];
    this.tryCount = 1;
    this.upperBridge = [];
    this.downBridge = [];
  }

  move(answer, bridge) {
    if (answer === bridge[this.mapIndex]) {
      this.mapIndex += 1;
      this.map.push({ position: answer, result: "O" });
      return this.map;
    } else {
      this.mapIndex += 1;
      this.map.push({ position: answer, result: "X" });
      return this.map;
    }
  }

  mapToBridgeshape(map) {
    this.upperBridge = [];
    this.downBridge = [];
    this.makeBridgeMap(map);
    this.makeBridgeMapRightShape();
    return [this.upperBridge, this.downBridge];
  }

  makeBridgeMap(map) {
    map.map((el) => {
      if (el.position === "U") {
        this.upperBridge.push(` ${el.result} `);
        this.downBridge.push("   ");
      }
      if (el.position === "D") {
        this.upperBridge.push("   ");
        this.downBridge.push(` ${el.result} `);
      }
    });
  }

  makeBridgeMapRightShape() {
    this.upperBridge = JSON.stringify(this.upperBridge)
      .replaceAll('"', "")
      .replaceAll(",", "|");
    this.downBridge = JSON.stringify(this.downBridge)
      .replaceAll('"', "")
      .replaceAll(",", "|");
  }

  retry() {
    this.tryCount += 1;
    this.mapIndex = 0;
    this.map = [];
  }
}

module.exports = BridgeGame;
