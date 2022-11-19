const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

const Intercessor = {
  gameMap:[],
  gameResult: false,

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
      if (!this.matchOneStep(bridge[i], bridgeGame)){
        this.gameResult = false;
        return;
      }
    }
    this.gameResult = true;
    return;
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

  checkResult(){
    if(this.gameResult) return true;
    const command = InputView.readGameCommand();
    const bridgeGame = new BridgeGame();
    const retry = bridgeGame.retry(command);
    if(retry) return false;
    return true;
  },

  printResult(count){
    if(this.gameResult){
      OutputView.printResult("성공", count, this.gameMap);
    }else{
      OutputView.printResult("실패", count, this.gameMap);
    }
  }
  

};

module.exports = Intercessor;
