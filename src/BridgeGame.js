

class BridgeGame {
 
  #curIdx;
  #success;
  
  constructor(){
    this.init();
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
  }
}

module.exports = BridgeGame;
