const OutputView = require('./Views/OutputView');
const { GAME } = require('./constants/constants');

class Map {
  #originMap;

  constructor() {
    this.#originMap;
  }

  makeOriginBridgeMap(bridge) {
    let bridgeMap = [[], []];
    bridgeMap[0] = this.makeUpperBridge(bridge);
    bridgeMap[1] = this.makeLowerBridge(bridge);
    this.#originMap = bridgeMap;
    return bridgeMap;
  }

  makeUpperBridge(bridge) {
    let upperBridge = [];
    for (let i = 0; i < bridge.length; i += 1) {
      if (bridge[i] === GAME.UP) upperBridge[i] = GAME.GO;
      if (bridge[i] === GAME.DOWN) upperBridge[i] = GAME.FALL;
    }
    return upperBridge;
  }

  makeLowerBridge(bridge) {
    let lowerBridge = [];
    for (let i = 0; i < bridge.length; i += 1) {
      if (bridge[i] === GAME.UP) lowerBridge[i] = GAME.FALL;
      if (bridge[i] === GAME.DOWN) lowerBridge[i] = GAME.GO;
    }
    return lowerBridge;
  }

  makeNowMap(go, step) {
    let nowMap = this.sliceMapFromZeroToNowStep(step);
    for (let k = 0; k < nowMap[0].length - 1; k += 1) {
      if (nowMap[0][k] === GAME.FALL) nowMap[0][k] = ' ';
      if (nowMap[1][k] === GAME.FALL) nowMap[1][k] = ' ';
    }
    nowMap = this.markUnpassedStep(nowMap, go, step);
    return nowMap;
  }

  sliceMapFromZeroToNowStep(step) {
    let map = [[], []];
    map[0] = this.#originMap[0].slice(0, step + 1);
    map[1] = this.#originMap[1].slice(0, step + 1);
    return map;
  }

  markUnpassedStep(nowMap, go, step) {
    if (go === GAME.GO) {
      if (nowMap[0][step] === GAME.FALL) nowMap[0][step] = ' ';
      if (nowMap[1][step] === GAME.FALL) nowMap[1][step] = ' ';
    }
    if (go === GAME.FALL) {
      if (nowMap[0][step] === GAME.GO) nowMap[0][step] = ' ';
      if (nowMap[1][step] === GAME.GO) nowMap[1][step] = ' ';
    }
    return nowMap;
  }

  drawNowMap(go, step) {
    OutputView.printMap(this.makeNowMap(go, step));
  }

  drawNowMapWithResult(go, step, result) {
    OutputView.printResult(this.makeNowMap(go, step), result);
  }
}

module.exports = Map;
