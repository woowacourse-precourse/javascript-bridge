const { COMMAND } = require("./constant");
const Controller = require("./Controller");

class BridgeGame {

  move(block, completeBridge) {
    Controller.addPlayerBlock(block);
    const currentRound = Controller.round - 1;
    if (Controller.playerArr[currentRound] === completeBridge[currentRound]) {
      Controller.successMove(block);
    }
    if (Controller.playerArr[currentRound] !== completeBridge[currentRound]) {
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
