const OutputView = require("./OutputView.js");
const RecallUntilCorrect = require("./RecallUntilCorrect.js");
const BridgeMaker = require("./BridgeMaker.js");
const BridgeGame = require("./BridgeGame.js");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class App {
  setting(){
    OutputView.printGameStart();
    const BRIDGE_SIZE = RecallUntilCorrect.recallReadBridgeSize();
    const BRIDGE_MAP = BridgeMaker.makeBridge(BRIDGE_SIZE,BridgeRandomNumberGenerator.generate);
    return BRIDGE_MAP;
  }

  play() {
    const setting = this.setting();
    const player = new BridgeGame(setting);
    this.move(setting, player);
    this.result(player);
  }

  /**
   * @param {string[]} setting 셋팅값 즉, 생성된 다리(정답)가 들어있는 배열 ex) [U,D,D]
   * @param {object} player BridgeGame을 실행하는 player객체
   */
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

  /**
   * @param {object} player BridgeGame을 실행하는 player객체
   * @param {boolean} canMove 플레이어가 이동한 칸이 이동가능한지 여부 가능하면 true, 불가능하면 false;
   * @return {string} 재시작을 원하면 "R"반환, 종료를 원하면 "Q"반환
   */
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

  /**
   * @param {object} player BridgeGame을 실행하는 player객체
   */
  result(player){
    OutputView.printResult(player.getUpMap().slice(0,-1), player.getDownMap().slice(0,-1));
    OutputView.printIsGameClear(player.getSuccess());
    OutputView.printHowManyPlay(player.getCumulativeCount());
  }
}

module.exports = App;
