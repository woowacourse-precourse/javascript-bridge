const { MOVE_STRING } = require("./constants");

class BridgeMap {
  #bridgeMap;

  constructor() {
    this.#bridgeMap = {'U':[],'D':[]};
  }

  buildMap(moving, isMatch) {
    const result = isMatch? 'O' : 'X';
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
