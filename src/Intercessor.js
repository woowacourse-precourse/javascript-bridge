const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

const Intercessor = {
  gameMap:[],

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
        this.gameMap = bridgeGame.combineTracks(moving, false);
        OutputView.printMap(this.gameMap);
        return false;
      }
      this.gameMap = bridgeGame.combineTracks(moving, true);
      OutputView.printMap(this.gameMap);
    } catch (error) {
      OutputView.printException(error);
    }
    return true;
  },

  printResult(win, count){
    if(win){
      OutputView.printResult("성공", count, this.gameMap);
    }else{
      OutputView.printResult("실패", count);
    }
  }
  

};

module.exports = Intercessor;
