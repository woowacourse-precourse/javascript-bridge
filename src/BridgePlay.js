const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");

class BridgePlay{
  constructor(bridge){
    this.bridge = bridge;
    this.bridgeGame = new BridgeGame({ status:[], attempts:1 })
  }

  startRound(){
    InputView.readMoving(this);
  }

  playRound(moving){
    const status = this.bridgeGame.move(moving);
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

  playRoundOver(status){
    OutputView.printMap(status, false);
    InputView.readGameCommand(this);
  }

  playRoundNext(status){
    OutputView.printMap(status, true);
    this.startRound();
  }

  playRoundComplete(){
    //test
    console.log("round complete");
  }

  quitOrRetry(option){
    //test
    console.log(option);
  }

}

module.exports = BridgePlay;