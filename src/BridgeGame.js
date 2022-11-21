const Bridge = require("./Bridge");
const { makeBridge } = require("./BridgeMaker");
const BridgeMap = require("./BridgeMap");
const { generate } = require("./BridgeRandomNumberGenerator");
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
    this.#tryingNum = 1;
  }

  move(moving) {
    this.#step += 1;
    const isMatch = this.#bridge.matchMoveBridge(moving, this.#step);
    this.#bridgeMap.buildMap(isMatch);
    return isMatch;
  }
  
  getMap(isUp, moving) {
    return isUp ? this.#bridgeMap.upMap(moving) : this.#bridgeMap.downMap(moving);
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
