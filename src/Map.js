const OutputView = require('./Views/OutputView');

class Map {
  #map;

  constructor() {
    this.#map;
  }

  make(bridge) {
    let bridgeMap = [[], []];
    bridgeMap[0] = this.makeUpperBridge(bridge);
    bridgeMap[1] = this.makeLowerBridge(bridge);
    this.#map = bridgeMap;
  }

  makeUpperBridge(bridge) {
    let upperBridge = [];
    for (let i = 0; i < bridge.length; i += 1) {
      if (bridge[i] === 'U') upperBridge[i] = 'X';
      if (bridge[i] === 'D') upperBridge[i] = 'O';
    }
    return upperBridge;
  }

  makeLowerBridge(bridge) {
    let lowerBridge = [];
    for (let i = 0; i < bridge.length; i += 1) {
      if (bridge[i] === 'U') lowerBridge[i] = 'O';
      if (bridge[i] === 'D') lowerBridge[i] = 'X';
    }
    return lowerBridge;
  }

  makeNowMap(go, step) {
    let nowMap = this.sliceMapFromZeroToNowStep(step);
    for (let k = 0; k < nowMap[0].length - 1; k += 1) {
      if (nowMap[0][k] === 'X') nowMap[0][k] = ' ';
      if (nowMap[1][k] === 'X') nowMap[1][k] = ' ';
    }
    nowMap = this.markUnpassedStep(nowMap, go, step);
    return nowMap;
  }

  sliceMapFromZeroToNowStep(step) {
    let map = [[], []];
    map[0] = this.#map[0].slice(0, step + 1);
    map[1] = this.#map[1].slice(0, step + 1);
    return map;
  }

  markUnpassedStep(nowMap, go, step) {
    if (go === 'O') {
      if (nowMap[0][step] === 'X') nowMap[0][step] = ' ';
      if (nowMap[1][step] === 'X') nowMap[1][step] = ' ';
    }
    if (go === 'X') {
      if (nowMap[0][step] === 'O') nowMap[0][step] = ' ';
      if (nowMap[1][step] === 'O') nowMap[1][step] = ' ';
    }
    return nowMap;
  }

  drawNowMap(go, step) {
    OutputView.printMap(this.makeNowMap(go, step));
  }

  drawNowMapWithResult(go, step, tries, result) {
    OutputView.printResult(this.makeNowMap(go, step), tries, result);
  }
}

module.exports = Map;
