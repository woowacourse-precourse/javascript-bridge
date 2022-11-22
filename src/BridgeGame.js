const { BRIDGE, MAP } = require('./constants');

class BridgeGame {
  #bridge = [];

  #map = [[], []];


  getMap() {
    return this.#map;
  }

  getMovingNum() {
    const [upSide] = this.#map;
    return upSide.length;
  }

  saveBridge(bridge) {
    this.#bridge = bridge;
  }

  move(moving) {
    const crossResult = this.judgeCross(moving);
    const [crossSide, unCrossSide] = this.defineCrossSide(moving);

    crossSide.push(crossResult);
    unCrossSide.push(BRIDGE.ROOM);

    return crossResult;
  }

  defineCrossSide(moving) {
    const [upSide, downSide] = this.#map;

    if (moving === MAP.UP_SIDE_STR) {
      return [upSide, downSide];
    }

    return [downSide, upSide];
  }

  judgeCross(moving) {
    const movingNum = this.getMovingNum();

    if (this.#bridge[movingNum] === moving) {
      return BRIDGE.CROSS;
    }

    return BRIDGE.UN_CROSS;
  }

  isArrived() {
    const movingNum = this.getMovingNum();
    return this.#bridge.length === movingNum;
  }

}

module.exports = BridgeGame;
