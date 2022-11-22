const { printMap } = require('./OutputView');
const {WAY} = require('./constant')
class BridgeGame {
  #bridge;
  #myWay;
  #attempts;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#myWay = [[], []];
    this.#attempts = 0;
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
    this.#attempts++;
  }
  getMyWay(){
    return this.#myWay;
  }
  test(){
    console.log(this.#myWay);
  }

  
}


let bg = new BridgeGame(['U', 'D', 'D']);
bg.move('U');
bg.move('D');
bg.test();
printMap(bg.getMyWay());