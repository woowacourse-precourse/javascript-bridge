const Controller = require("./Controller");
const { COMMAND } = require("./constant");

class BridgeGame {

  move(block, completeBridge) {
    Controller.addPlayerBlock(block);
    const index = Controller.playerArr.length - 1;
    if (Controller.playerArr[index] === completeBridge[index]) {
      Controller.successMove(block);
    }
    if (Controller.playerArr[index] !== completeBridge[index]) {
      Controller.failMove(block);
    }
  }

  retry(command) {
    if (command === COMMAND.retry) {
      return true;
    }
  }
}

module.exports = BridgeGame;
