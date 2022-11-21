const BridgeGame = require("../Model/BridgeGame");
const OutputView = require("../View/OutputView");

const Controller = {
  makeBridgeGame(bridgeSize) {
    const bridgeGame = new BridgeGame();
    bridgeGame.initGame(bridgeSize);
    return bridgeGame;
  },

  sendUserMoving(userMoving, bridgeGame) {
    const result = bridgeGame.move(userMoving);
    if (result === 1) {
      OutputView.printResult(bridgeGame);
    }
    return result;
  },

  sendGameCommand(command, bridgeGame) {
    if (command === "Q") {
      // get results string
      OutputView.printResult(bridgeGame); // send results strings
      return true;
    }
    if (command === "R") bridgeGame.initSelectBridge();
  },
};

module.exports = Controller;
