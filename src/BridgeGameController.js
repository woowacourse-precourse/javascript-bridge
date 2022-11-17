const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임 진행 로직 함수
 */
class BridgeGameController {
  static makeNewBridgeGame(input) {
    return new BridgeGame(BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate));
  }

  SUCCESS_ARRIVAL = 2;
  SUCCESS_ROUND = 1;
  FAILURE_ROUND = 0;
  static startNewRound(bridgeGame, input) {
    const roundResult = bridgeGame.move(input);
    OutputView.printMap(bridgeGame.stateToString());
    if(!roundResult) return this.FAILURE_ROUND;
    else if (!bridgeGame.isArrived()) return this.SUCCESS_ROUND;
    OutputView.printResult(bridgeGame.stateToString(), bridgeGame.isArrived(), bridgeGame.getTry());
    return this.SUCCESS_ARRIVAL;  
  }
}

module.exports = BridgeGameController;