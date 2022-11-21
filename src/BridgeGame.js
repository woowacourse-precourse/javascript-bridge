const RecallUntilCorrect = require("./RecallUntilCorrect.js");
const OutputView = require("./OutputView.js");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 class BridgeGame {
  #cumulativeCount
  #bridgeSize
  #bridgeMap
  constructor(bridgeSize, bridgeMap){
    this.#cumulativeCount = 1;
    this.#bridgeSize = bridgeSize;
    this.#bridgeMap = bridgeMap;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async move() {
    let upMap = "", downMap ="";
    for(let moveCount=0;moveCount<this.#bridgeSize;moveCount++){
      const moving = RecallUntilCorrect.recallReadMoving(true);
      if(moving===this.#bridgeMap[moveCount]){  //움직이려고 하는 곳이 이동할 수 있는 곳이면 O표시 후 맵을 보여주고 계속진행
        const Map = await this.isUpOrDown(moving, true);
        upMap += Map[0], downMap += Map[1];
        OutputView.printMap(upMap.slice(0,-1), downMap.slice(0,-1));
      }else{  //움직이려고 하는 곳이 이동할 수 없는 곳이면 X표시 후 맵을 보여주고 재시작 여부를 묻는다.
        const Map = await this.isUpOrDown(moving, false);
        upMap += Map[0], downMap += Map[1];
        OutputView.printMap(upMap.slice(0,-1), downMap.slice(0,-1));
        this.isRetryOrQuit();
      }
    }
  }
  isUpOrDown(moving, canMove){
    if(moving === "U" && canMove){
      return ["O"+"|", " "+"|"];
    }
    if(moving === "D" && canMove){
      return[" "+"|", "O"+"|"];
    }
    if(moving === "U" && !canMove){
      return["X"+"|", " "+"|"];
    }
    if(moving === "D" && !canMove){
      return[" "+"|", "X"+"|"];
    }
  }
  isRetryOrQuit(){
    const gameCommand = RecallUntilCorrect.recallreadGameCommand(true);
    if(gameCommand==="R"){
      this.retry();
    }
    if(gameCommand==="Q"){
      this.quit();
    }
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#cumulativeCount+=1;
    this.move();
  }
  quit() {}
}

module.exports = BridgeGame;
