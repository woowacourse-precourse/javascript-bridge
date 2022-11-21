const InputView = require("./InputView.js");
const ValidCheck = require("./ValidCheck.js");
const RecallUntilCorrect = {
  recallReadBridgeSize(){
    let bridgeSize;
    bridgeSize = InputView.readBridgeSize();
    let recallUntilCorrect = ValidCheck.bridgeSizeValidCheck(bridgeSize);
    if(recallUntilCorrect === true){
      this.recallReadBridgeSize();
    }
    return bridgeSize;
  },
  recallReadMoving(){
    let moving;
    moving = InputView.readMoving();
    let recallUntilCorrect = ValidCheck.movingValidCheck(moving);
    if(recallUntilCorrect === true){
      this.recallReadMoving();
    }
    return moving;
  },
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