const OutputView = require('./OutputView');

class Map {
  #map;

  constructor() {
    this.#map;
  }

  make(bridge) {
    let bridgeMap = [[], []];
    for (let i = 0; i < bridge.length; i += 1) {
      if (bridge[i] === 'U') {
        bridgeMap[0][i] = 'O';
        bridgeMap[1][i] = 'X';
      }
      if (bridge[i] === 'D') {
        bridgeMap[0][i] = 'X';
        bridgeMap[1][i] = 'O';
      }
    }
    this.#map = bridgeMap;
  }

  makeNowMap(go, step) {
    let nowMap = [[], []];
    nowMap[0] = this.#map[0].slice(0, step + 1);
    nowMap[1] = this.#map[1].slice(0, step + 1);
    for (let k = 0; k < nowMap[0].length - 1; k += 1) {
      if (nowMap[0][k] === 'X') nowMap[0][k] = ' ';
      if (nowMap[1][k] === 'X') nowMap[1][k] = ' ';
    }
    if (go == 'O') {
      if (nowMap[0][step] === 'X') nowMap[0][step] = ' ';
      if (nowMap[1][step] === 'X') nowMap[1][step] = ' ';
    }
    if (go == 'X') {
      if (nowMap[0][step] === 'O') nowMap[0][step] = ' ';
      if (nowMap[1][step] === 'O') nowMap[1][step] = ' ';
    }
    // OutputView.printMap(nowMap);
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
