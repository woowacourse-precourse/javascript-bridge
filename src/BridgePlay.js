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
    const moveBy = status.length-1;
    if(status[moveBy] !== this.bridge[moveBy]){
      //test
      console.log("틀림")
    }else{
      this.startRound();
    }
  }
}

module.exports = BridgePlay;