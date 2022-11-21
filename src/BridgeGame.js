class BridgeGame {
 
  #curIdx;
  #success;
  #bridge;
  #gameCount;
  
  constructor(bridge){
    this.init();
    this.#bridge = bridge;
    this.#gameCount = 1;
  }

  init(){
    this.#curIdx =0;
    this.#success = true;
  }

  gameNotFinished(){
    return this.#success && this.#curIdx < this.#bridge.length;
  }

  gameSuccess(){
    return this.#success && this.#curIdx === this.#bridge.length;
  }

  getSuccess(){
    return this.#success;
  }

  getCount(){
    return this.#gameCount;
  }

  move(dir) {
    if(dir === this.#bridge[this.#curIdx]){
      this.#curIdx += 1;
    }
    else{
      this.#curIdx +=1;
      this.#success = false;
    }
  }

  retry() {
    this.init();
    this.#gameCount += 1;
  }
}

module.exports = BridgeGame;
