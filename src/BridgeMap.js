class BridgeMap {
  #bridgeMap;

  constructor() {
    this.#bridgeMap = [];
  }

  buildMap(isMatch) {
    const result = isMatch? 'O' : 'X';
    this.#bridgeMap = [...this.#bridgeMap, result];
    return this.#bridgeMap;
  }

  upMap(moving){
    const upMap = this.#bridgeMap.map((result)=>{
      if(moving === 'U'){
        return result;
      }
      return ' ';
    });
    return upMap;
  }

  downMap(moving){
    const downMap = this.#bridgeMap.map((result)=>{
      if(moving === 'D'){
        return result;
      }
      return ' ';
    });
    return downMap;
  }
}

module.exports = BridgeMap;