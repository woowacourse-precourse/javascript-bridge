const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");

class BridgePlay{
  constructor(bridge){
    this.bridge = bridge;
    this.bridgeGame = new BridgeGame(this.bridge, { moved:[], attempts:1 })
  }

  startRound(){
    InputView.readMoving(this);
  }

  playRound(moving){
    const moved = this.bridgeGame.move(moving);
    OutputView.printMap(this.bridge, moved);  
    this.playNext();
  }

  playNext(){
    switch(this.bridgeGame.status()){
      case 0:
        InputView.readGameCommand(this);
        break;
      case 1:
        this.startRound();
        break;
      case 2:
        this.playEnd();
    }
  }

  endOrRetry(option){
    if(option==='R'){
      this.bridgeGame.retry();
      this.startRound();
      return;
    }//option==='Q'
    this.playEnd();
  }

  playEnd(){
    const {moved, attempts} = this.bridgeGame.get();
    OutputView.printResult(this.bridge, moved, attempts);
  }
}

module.exports = BridgePlay;