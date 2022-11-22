const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");

class BridgeGame {

  constructor(size) {
    this.bridge = makeBridge(size, generate);
    this.state = [];
    this.currentPos = 0;
    this.isLastStep = false;
    this.isGameOver = false;
    this.tryCount = 0;
  }

  /* 한 칸 이동할 때마다 호출되는 메서드*/
  move(userInput) {
    const currentSide = this.bridge[this.currentPos];

    this.state.push(currentSide === userInput);
    this.currentPos += 1;
    this.currentState();
    return this.state[this.state.length - 1];
  }

  currentState(){
    if(this.currentPos === this.bridge.length){
      this.isLastStep = true;
    }
    if(this.state[this.state.length- 1] === false){
      this.isGameOver = true;
    }
  }

  retry(toRetry) {
    if(toRetry === true){
      this.state = [];
      this.currentPos = 0;
      this.isGameOver = false;
      this.tryCount += 1;
    }
    return false;
  }
}

module.exports = BridgeGame;
