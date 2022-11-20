const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");

class BridgePlay{
  constructor(bridge){
    this.bridge = bridge;
    this.bridgeGame = new BridgeGame({ bridge:this.bridge, status:[], attempts:1 })
  }

  startRound(){
    InputView.readMoving(this);
  }

  playRound(moving){
    const status = this.bridgeGame.move(moving);
    OutputView.printMap(this.bridge, status);
    if(status[status.length-1] !== this.bridge[status.length-1]){
      this.playRoundOver(status);
      return;
    }
    if(status.length === this.bridge.length){
      this.playRoundComplete();
      return;
    }
    this.playRoundNext(status);
  }

  playRoundNext(){
    this.startRound();
  }

  playRoundOver(){
    InputView.readGameCommand(this);
  }
  quitOrRetry(option){
    if(option==='R'){
      this.bridgeGame.retry();
      this.startRound();
    }
    else{//option==='Q'
      OutputView.printResult(this.bridgeGame.get(), false);
    }
  }
  
  playRoundComplete(){
    OutputView.printResult(this.bridgeGame.get(), true);
  }

  

}

module.exports = BridgePlay;