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
   * @param {number} moveCount 현재 몇 번째 이동인지
   * @return {boolean} 플레이어가 이동한 칸이 이동가능한지 여부 가능하면 true, 불가능하면 false
   */
  move(moveCount) {
    const moving = RecallUntilCorrect.recallReadMoving();
    return this.comparePlayerAndMap(moving, moveCount);
  }

  /**"
   * @param {String} moving 플레이어가 입력한 이동("U" or "D")
   * @param {number} moveCount 현재 몇 번째 이동인지
   * @return {boolean} 플레이어가 이동한 칸이 이동가능한지 여부 가능하면 true, 불가능하면 false
   */  
  comparePlayerAndMap(moving, moveCount){
    if(moving===this.#bridgeMap[moveCount]){
      const MAP = this.isUpOrDown(moving, true);
      if(MAP!=undefined)
        this.addUpDownMap(MAP);
      return true;
    }else{
      const MAP = this.isUpOrDown(moving, false);
      if(MAP!=undefined)
        this.addUpDownMap(MAP);
      return false;
    }
  }

  /**"
   * @param {String[]} map 다리 맵의 윗부분과 아랫부분이 담긴 배열 [0]에는 윗부분 / [1]에는 아랫부분이 담겨있다.
   */    
  addUpDownMap(map){
    this.#upMap += map[0], this.#downMap += map[1];
  }

  /**"
   * @param {String} moving 플레이어가 입력한 이동("U" or "D")
   * @param {booelan} canMove 플레이어가 이동한 칸이 이동가능한지 여부 가능하면 true, 불가능하면 false;
   * @return {String[]} [0]에는 다리 윗부분, [1]에는 아랫부분이 return된다.
   */    
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

  /**"
   * @return {String} 입력 커맨드를 Return ("R","Q")
   */      
  isRetryOrQuit(){
    const gameCommand = RecallUntilCorrect.recallreadGameCommand();
    if(gameCommand==="R"){
      return this.retry();
    }
    if(gameCommand==="Q"){
      return "Q";
    }
  }

  /**"
   * @return {String} 입력 커맨드를 Return ("R")
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
