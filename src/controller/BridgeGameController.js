const BridgeGame = require("../BridgeGame");

class BridgeGameController {
  constructor(mainController) {
    this.mainController = mainController;
    this.bridgeGame = new BridgeGame(this);
  }

  tryMove(isSuccess, isFinished) {
    if (!isSuccess) {
      this.bridgeGame.move("failed");
    }
    if (isSuccess && !isFinished) {
      this.bridgeGame.move("getAnotherMoving");
    }
    if (isSuccess && isFinished) {
      this.bridgeGame.move("finished");
    }
  }
}

module.exports = BridgeGameController;
