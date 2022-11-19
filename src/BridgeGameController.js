const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임 진행 로직 함수
 */
const BridgeGameController = {
  SUCCESS_ARRIVAL: 2,
  SUCCESS_ROUND: 1,
  FAILURE_ROUND: 0,
  QUIT: 0,
  RETRY: 1,

  makeNewBridgeGame(input) {
    return new BridgeGame(BridgeMaker.makeBridge(parseInt(input), BridgeRandomNumberGenerator.generate));
  },
  
  startNewRound(bridgeGame, input) {
    const roundResult = bridgeGame.move(input);
    OutputView.printMap(bridgeGame.stateToString());
    if(!roundResult) return BridgeGameController.FAILURE_ROUND;
    else if (!bridgeGame.isArrived()) return BridgeGameController.SUCCESS_ROUND;
    OutputView.printResult(bridgeGame.stateToString(), bridgeGame.isArrived(), bridgeGame.getTry());
    return BridgeGameController.SUCCESS_ARRIVAL;  
  },

  terminate(bridgeGame, input) {
    if(input == 'R') {
      bridgeGame.retry();
      return BridgeGameController.RETRY;
    } 
    OutputView.printResult(bridgeGame.stateToString(), bridgeGame.isArrived(), bridgeGame.getTry());
    return BridgeGameController.QUIT;
  }
}

module.exports = BridgeGameController;