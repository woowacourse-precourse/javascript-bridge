const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

const Intercessor = {
  startGame() {
    OutputView.printGameStart();
  },

  bridgeMake() {
    let bridge;
    try {
      const bridgeSize = InputView.readBridgeSize();
      bridge = BridgeMaker.makeBridge(
        bridgeSize,
        BridgeRandomNumberGenerator.generate
      );
    } catch (error) {
      OutputView.printException(error);
    }
    return bridge;
  },

  matchMove(bridge) {
    const bridgeGame = new BridgeGame();
    for (let i = 0; i < bridge.length; i++) {
      if (!this.matchOneStep(bridge[i], bridgeGame)) return bridgeGame;
    }
    return bridgeGame;
  },

  matchOneStep(block, bridgeGame) {
    try {
      const moving = InputView.readMoving();
      if (!bridgeGame.move(moving, block)) {
        OutputView.printMap(bridgeGame.printReady(moving, false));
        return bridgeGame.gameLose();
      }
      OutputView.printMap(bridgeGame.printReady(moving, true));
    } catch (error) {
      OutputView.printException(error);
    }
    return bridgeGame.gameWin();
  },

  checkResult(bridgeGame){
    console.log(bridgeGame.getResult());
  }
  

};

module.exports = Intercessor;
