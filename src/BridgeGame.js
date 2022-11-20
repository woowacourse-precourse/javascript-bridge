class BridgeGame {
 
  #curIdx;
  #success;
  #gameCount;
  
  constructor(){
    this.init();
    this.#gameCount = 1;
  }

  init(){
    this.#curIdx =0;
    this.#success = true;
  }

  getIdx(){
    return this.#curIdx;
  }

  getSuccess(){
    return this.#success;
  }

  getCount(){
    return this.#gameCount;
  }

  move(dir, bridge) {
    if(dir === bridge[this.#curIdx]){
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
