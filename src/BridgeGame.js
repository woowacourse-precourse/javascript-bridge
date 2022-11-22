const Bridge = require("./Bridge");
const { makeBridge } = require("./BridgeMaker");
const BridgeMap = require("./BridgeMap");
const BridgeRandom = require("./BridgeRandomNumberGenerator");
const BridgeGameValidator = require("./validator/BridgeGameValidator");
const { INPUT_RETRY, INITIAL_VALUE } = require("./constants");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #bridgeMap;
  #step;

  constructor(bridgeSize){
    new BridgeGameValidator().bridgeSizeValidate(bridgeSize);
    this.#bridge = new Bridge(makeBridge(bridgeSize, BridgeRandom.generate));
    this.#bridgeMap = new BridgeMap();
    this.#step = INITIAL_VALUE.STEP;
  }

  move(moving) {
    new BridgeGameValidator().movingValidate(moving);
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

  retry(retry) {
    new BridgeGameValidator().retryValidate(retry);
    if(retry === INPUT_RETRY.RETRY){
      this.#bridgeMap = new BridgeMap();
      this.#step = INITIAL_VALUE.STEP;
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;
