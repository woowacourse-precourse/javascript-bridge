const InputView = require("./InputView.js");
const ValidCheck = require("./ValidCheck.js");
const RecallUntilCorrect = {

  /**"
   * @return {number} 다리 길이를 리턴(올바른 값 3~20 숫자)
   */  
  recallReadBridgeSize(){
    let bridgeSize;
    bridgeSize = InputView.readBridgeSize();
    let recallUntilCorrect = ValidCheck.bridgeSizeValidCheck(bridgeSize);
    if(recallUntilCorrect === true){
      this.recallReadBridgeSize();
    }
    return bridgeSize;
  },

  /**"
   * @return {String} 플레이어 이동을 리턴 (올바른 값 "U", "D")
   */  
  recallReadMoving(){
    let moving;
    moving = InputView.readMoving();
    let recallUntilCorrect = ValidCheck.movingValidCheck(moving);
    if(recallUntilCorrect === true){
      this.recallReadMoving();
    }
    return moving;
  },

  /**"
   * @return {String} 입력 커맨드를 리턴 (올바른 값 "R","Q")
   */    
  recallreadGameCommand(){
    let gameCommand;
    gameCommand = InputView.readGameCommand();
    let recallUntilCorrect = ValidCheck.gameCommandValidCheck(gameCommand);
    if(recallUntilCorrect === true){
      this.recallreadGameCommand();
    }    
    return gameCommand;
  },
}
module.exports = RecallUntilCorrect;