const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class BridgeGame {
  #try;
  #bridge;
  #place;
  #end;

  constructor(size){
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#try = 1;
    this.#place = 0;
    this.#end = {
      round: false,
      game: false
    };
  }
  
  move(next) {
    if(this.#bridge[this.#place]===next){
      this.#place += 1;
    }else{
      this.#end.round = true;
    }
    this.checkGame();
  }

  checkGame() {
    if(this.#bridge.length===this.#place){
      this.#end.round = true;
      this.#end.game = true;
    }
  }

  isEnd(){
    return this.#end;
  }
  
  retry(input) {
    if(input==='R'){
      this.#try += 1;
      this.#place = 0;
      this.#end.round = false;
      return true;
    }else{
      return false;
    }
  }
  
  getBridge() {
    return this.#bridge;
  }

  getPlace() {
    return this.#place;
  }

  getTry() {
    return this.#try;
  }
}

module.exports = BridgeGame;
