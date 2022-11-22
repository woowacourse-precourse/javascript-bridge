const { BRIDGE, MAP } = require('./constants');

class BridgeGame {
  #bridge = [];

  #map = [[], []];

  #attemptsNum = 1;

  #initMap() {
    this.#map = [[], []];
  }

  getMap() {
    return this.#map.map((side) => BRIDGE.START + side.join(BRIDGE.SPLIT) + BRIDGE.END);
  }

  getAttemptsNum() {
    return this.#attemptsNum;
  }

  saveBridge(bridge) {
    this.#bridge = bridge;
  }

  move(moving) {
    const [crossSide, unCrossSide] = this.#defineCrossSide(moving);
    const crossResult = this.#judgeCross(moving);

    crossSide.push(crossResult);
    unCrossSide.push(BRIDGE.ROOM);

    return crossResult;
  }

  #defineCrossSide(moving) {
    const [upSide, downSide] = this.#map;

    if (moving === MAP.UP_SIDE_STR) {
      return [upSide, downSide];
    }

    return [downSide, upSide];
  }

  #judgeCross(moving) {
    const movingNum = this.#calcMovingNum();

    if (this.#bridge[movingNum] === moving) {
      return BRIDGE.CROSS;
    }

    return BRIDGE.UN_CROSS;
  }

  isArrived() {
    const movingNum = this.#calcMovingNum();
    return this.#bridge.length === movingNum;
  }

  #calcMovingNum() {
    const [upSide] = this.#map;
    return upSide.length;
  }

  retry() {
    this.#initMap();
    this.#updateAttemptsNum();
  }

  #updateAttemptsNum() {
    this.#attemptsNum += 1;
  }
}

module.exports = BridgeGame;
