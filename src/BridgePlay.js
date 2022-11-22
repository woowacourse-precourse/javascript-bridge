const OutputView = require("./view/OutputView");
const InputView = require("./view/InputView");
const BridgeGame = require("./BridgeGame");
const { GameSetting } = require("./constants/Constants");

class BridgePlay{

  constructor(bridge){
    this.bridge = bridge;
    this.bridgeGame = new BridgeGame(this.bridge, { moved:[], attempts:1 });
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
      case GameSetting.CAN_NOT_MOVE: 
        InputView.readGameCommand(this);
        break;
      case GameSetting.CAN_MOVE:
        this.newRound();
        break;
      case GameSetting.MOVE_COMPLETE:
        this.playEnd();
    }
  }

  endOrRetry(option){
    if(option===GameSetting.RETRY){
      this.bridgeGame.retry();
      this.newRound();
      return;
    }//option===GameSetting.QUIT
    this.playEnd();
  }

  playEnd(){
    const {moved, attempts} = this.bridgeGame.get();
    OutputView.printResult(this.bridge, moved, attempts);
  }

}

module.exports = BridgePlay;