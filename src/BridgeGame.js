const RecallUntilCorrect = require("./RecallUntilCorrect.js");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 class BridgeGame {
  #cumulativeCount
  #bridgeMap = [];
  #upMap = [];
  #downMap = [];
  #success
  constructor(bridgeMap){
    this.#cumulativeCount = 1;
    this.#bridgeMap = bridgeMap;
    this.#upMap = "";
    this.#downMap = "";
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveCount) {
    const moving = RecallUntilCorrect.recallReadMoving(true);
    if(moving===this.#bridgeMap[moveCount]){
      const MAP = this.isUpOrDown(moving, true);
      this.addUpDownMap(MAP);
      return true;
    }else{
      const MAP = this.isUpOrDown(moving, false);
      this.addUpDownMap(MAP);
      return false;
    }
  }
  addUpDownMap(map){
    this.#upMap += map[0], this.#downMap += map[1];
  }
  isUpOrDown(moving, canMove){
    if(moving === "U" && canMove) 
      return [" O"+" |", "  "+" |"]; 
    if(moving === "D" && canMove) 
      return["  "+" |", " O"+" |"]; 
    if(moving === "U" && !canMove) 
      return[" X"+" |", "  "+" |"]; 
    if(moving === "D" && !canMove) 
      return["  "+" |", " X"+" |"]; 
  }
  isRetryOrQuit(){
    const gameCommand = RecallUntilCorrect.recallreadGameCommand(true);
    if(gameCommand==="R"){
      return this.retry();
    }
    if(gameCommand==="Q"){
      return "Q";
    }
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#cumulativeCount+=1;
    this.#upMap = "";
    this.#downMap = "";
    return "R";
  }
  setSuccess(flag){
    this.#success = flag;
  }
  getUpMap(){
    return this.#upMap;
  }
  getDownMap(){
    return this.#downMap;
  }
  getSuccess(){
    return this.#success;
  }
  getCumulativeCount(){
    return this.#cumulativeCount;
  }
}

module.exports = BridgeGame;
