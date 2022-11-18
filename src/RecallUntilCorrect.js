const InputView = require("./InputView.js");
const ValidCheck = require("./ValidCheck.js");
const RecallUntilCorrect = {
    
  recallReadBridgeSize(recallUntilCorrect){
    let BRIDGE_SIZE;
    while(recallUntilCorrect){
      BRIDGE_SIZE = InputView.readBridgeSize();
      recallUntilCorrect = ValidCheck.bridgeSizeValidCheck(BRIDGE_SIZE);
    }
    return BRIDGE_SIZE;
  }
}
module.exports = RecallUntilCorrect;