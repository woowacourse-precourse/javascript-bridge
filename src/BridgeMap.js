class BridgeMap {
  #bridgeMap;

  constructor() {
    this.#bridgeMap = {'U':[],'D':[]};
  }

  buildMap(moving, isMatch) {
    const result = isMatch? 'O' : 'X';
    this.buildUpMap(moving, result);
    this.buildDownMap(moving, result);
    return this.#bridgeMap;
  }

  buildUpMap(moving, result){
    const isUp =  moving === 'U';
    this.#bridgeMap['U'] = [...this.#bridgeMap['U'], isUp? result : ' '];
  }

  buildDownMap(moving, result){
    const isDown =  moving === 'D';
    this.#bridgeMap['D'] = [...this.#bridgeMap['D'], isDown? result : ' '];
  }

  getMap(){
    return this.#bridgeMap;
  }
}

module.exports = BridgeMap;