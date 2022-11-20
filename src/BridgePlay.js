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
    //test
    console.log(moving);
  }
}

module.exports = BridgePlay;