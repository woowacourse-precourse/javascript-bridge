const Bridge = require("./Bridge");
const { makeBridge } = require("../BridgeMaker");
const BridgeMap = require("./BridgeMap");
const { generate } = require("../BridgeRandomNumberGenerator");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #bridgeMap;
  #step;

  constructor(bridgeSize){
    this.#bridge = new Bridge(makeBridge(bridgeSize, generate));
    this.#bridgeMap = new BridgeMap();
    this.#step = -1;
  }

  move(moving) {
    this.#step += 1;
    const isMatch =  this.#bridge.matchMoveBridge(moving, this.#step);
    this.#bridgeMap.buildMap(moving, isMatch);
    return isMatch;
  }

  result() {
    return this.#bridgeMap.getMap();
  }

  isEnd() {
    return this.#bridge.isReach(this.#step);
  }

  retry() {
    this.#bridgeMap = new BridgeMap();
    this.#step = -1;
  }
  
  
}

module.exports = BridgeGame;
