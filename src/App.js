const MissionUtils = require('@woowacourse/mission-utils');

const BridgeGame = require("./model/BridgeGame");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  play() {
    const bridgeSize = InputView.readBridgeSize();
    const bridgeGame = new BridgeGame(bridgeSize);
    this.manageGame(bridgeGame, bridgeSize);
  }

  manageGame(bridgeGame, bridgeSize) { 
    let termination = bridgeSize === undefined ? true : false; // bridgeSize = undefined, 게임을 바로 종료
    let tryCount = 0;

    while (!termination) {
      tryCount++;
      termination = this.proceedGame(bridgeGame, bridgeSize);
    }
    this.endGame(bridgeGame, tryCount);
  }

  proceedGame(bridgeGame, bridgeSize) {
    for (let round = 0; round < bridgeSize; round++) {
      const moving = InputView.readMoving();
      const isPassed = bridgeGame.move(moving, round);
      OutputView.printMap(bridgeGame);
      if (!isPassed) {
        return !this.askRetry(bridgeGame);
      }
    }
    
    return true;
  }

  askRetry(bridgeGame) {
    const retryCommand = InputView.readGameCommand();
    const isRetry = bridgeGame.retry(retryCommand);

    return isRetry;
  }

  endGame(bridgeGame, tryCount) {
    OutputView.printResult(bridgeGame, tryCount);
    MissionUtils.Console.close();
  }
}

module.exports = App;