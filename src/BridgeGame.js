// const { printMap } = require('./OutputView');
const {WAY} = require('./constant')
class BridgeGame {
  #bridge;
  #myWay;
  #attempts;
  #step;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#myWay = [[], []];
    this.#attempts = 1;
    this.#step = 0;
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
    this.#step++;
  }
  isRightWay(key){
    if(key === this.#bridge[this.#step]) return true;
    return false; 
  }
  retry() {
    this.#attempts += 1;
    this.#myWay = [[],[]];
    this.#step = 0;
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


// let bg = new BridgeGame(['U', 'D', 'D']);
// bg.move('U');
// bg.move('U');
// bg.test();
// printMap(bg.getMyWay());