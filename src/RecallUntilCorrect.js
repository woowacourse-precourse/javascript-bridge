const InputView = require("./InputView.js");
const ValidCheck = require("./ValidCheck.js");
const RecallUntilCorrect = {
  recallReadBridgeSize(recallUntilCorrect){
    let bridgeSize;
    while(recallUntilCorrect){
      bridgeSize = InputView.readBridgeSize();
      recallUntilCorrect = ValidCheck.bridgeSizeValidCheck(bridgeSize);
    }
    return bridgeSize;
  },
  recallReadMoving(recallUntilCorrect){
    let moving;
    while(recallUntilCorrect){
      moving = InputView.readMoving();
      recallUntilCorrect = ValidCheck.movingValidCheck(moving);
    }
    return moving;
  },
  recallreadGameCommand(recallUntilCorrect){
    let gameCommand;
    while(recallUntilCorrect){
      gameCommand = InputView.readGameCommand();
      recallUntilCorrect = ValidCheck.gameCommandValidCheck(gameCommand);
    }
    return gameCommand;
  },
}
module.exports = RecallUntilCorrect;