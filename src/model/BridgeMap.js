const { MOVE_STRING, MOVE_RESULT } = require("../constants");

class BridgeMap {
  #bridgeMap;

  constructor() {
    this.#bridgeMap = {'U':[],'D':[]};
  }

  buildMap(moving, isMatch) {
    const result = isMatch? MOVE_RESULT.SUCCESS : MOVE_RESULT.FAIL;
    this.buildUpMap(moving, result);
    this.buildDownMap(moving, result);
  }

  buildUpMap(moving, result){
    const isUp =  moving === MOVE_STRING.UP;
    this.#bridgeMap[MOVE_STRING.UP] = [...this.#bridgeMap[MOVE_STRING.UP], isUp? result : ' '];
  }

  buildDownMap(moving, result){
    const isDown =  moving === MOVE_STRING.DOWN;
    this.#bridgeMap[MOVE_STRING.DOWN] = [...this.#bridgeMap[MOVE_STRING.DOWN], isDown? result : ' '];
  }

  getMap(){
    return this.#bridgeMap;
  }
}

module.exports = BridgeMap;
