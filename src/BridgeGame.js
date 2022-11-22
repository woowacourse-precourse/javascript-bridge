const {WAY} = require('./constant')
class BridgeGame {
  #bridge;
  #myWay;
  #attempts;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#myWay = [[], []];
    this.#attempts = 1;
  }
  move(key) {
    if(key === 'U') {
      this.#myWay[WAY.UP_WAY].push(key);
      this.#myWay[WAY.DOWN_WAY].push(' ');
    }
    if(key === 'D') {
      this.#myWay[WAY.UP_WAY].push(' ');
      this.#myWay[WAY.DOWN_WAY].push(key);
    }
  }
  myWayToOX(key){
    let OXWay = [[],[]];
    OXWay = this.#myWay.map((way) =>{
      return way.map((item) => {
        if(item == ' ') return ' ';
        if(this.isWrongWay(key)) return 'X';
        if(item == 'U' || item === 'D') return 'O';
      });
    });
    return OXWay;
  }
  isWrongWay(key){
    const step = this.#myWay[0].length -1;
    return key !== this.#bridge[step]; 
  }
  retry() {
    this.#attempts += 1;
    this.#myWay = [[],[]];
  }

  isLast(){
    return this.#bridge.length === this.#myWay[0].length;
  }

  getMyWay(){
    return this.#myWay;
  }

  getAttempts(){
    return this.#attempts;
  }

  
}
module.exports = BridgeGame;