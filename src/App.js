const OutputView = require("./OutputView.js");
const RecallUntilCorrect = require("./RecallUntilCorrect.js");
const BridgeMaker = require("./BridgeMaker.js");
const BridgeGame = require("./BridgeGame.js");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class App {
  setting(){
    OutputView.printGameStart();
    const BRIDGE_SIZE = RecallUntilCorrect.recallReadBridgeSize(true);
    const BRIDGE_MAP = BridgeMaker.makeBridge(BRIDGE_SIZE,BridgeRandomNumberGenerator.generate);
    return BRIDGE_MAP;
  }

  play() {
    const setting = this.setting();
    const player = new BridgeGame(setting);
    this.move(setting, player);
    this.result(player);
  }

  move(setting, player){
    let moveCount = 0, wantRetry = '';
    while(moveCount<setting.length){
      let canMove = player.move(moveCount);
      moveCount+=1;
      wantRetry = this.moveJudgement(player, canMove);
      if(wantRetry==="R")
        moveCount = 0;
      if(wantRetry==="Q")
        break;
    }
  }

  moveJudgement(player, canMove){
    if(canMove){
      OutputView.printMap(player.getUpMap().slice(0,-1), player.getDownMap().slice(0,-1));
      player.setSuccess("성공");
      return '';
    }else{
      OutputView.printMap(player.getUpMap().slice(0,-1), player.getDownMap().slice(0,-1));
      wantRetry = player.isRetryOrQuit();
      player.setSuccess("실패");
      return wantRetry;
    }
  }
  
  result(player){
    OutputView.printResult(player.getUpMap().slice(0,-1), player.getDownMap().slice(0,-1));
    OutputView.printIsGameClear(player.getSuccess());
    OutputView.printHowManyPlay(player.getCumulativeCount());
  }
}

module.exports = App;
