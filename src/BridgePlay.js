const OutputView = require("./view/OutputView");
const InputView = require("./view/InputView");
const BridgeGame = require("./BridgeGame");

class BridgePlay{
  constructor(bridge){
    this.bridge = bridge;
    this.bridgeGame = new BridgeGame(this.bridge, { moved:[], attempts:1 })
  }

  newRound(){
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
        this.newRound();
        break;
      case 2:
        this.playEnd();
    }
  }

  endOrRetry(option){
    if(option==='R'){
      this.bridgeGame.retry();
      this.newRound();
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