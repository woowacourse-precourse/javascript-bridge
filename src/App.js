const { Console } = require('@woowacourse/mission-utils');
const { printStart, printMap, printResult } = require('./OutputView');
const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const { STATE } = require('./Contants');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    printStart();
    readBridgeSize((size) => {
      const bridgeGame = new BridgeGame(size);
      this.progressGame(bridgeGame);
    });
  }

  progressGame(bridgeGame) {
    readMoving((to) => {
      bridgeGame.move(to);
      const { upBridgeRoute, downBridgeRoute } = bridgeGame.currentRoute;
      printMap(upBridgeRoute, downBridgeRoute);
      if (bridgeGame.state === STATE.PROGRESS) this.progressGame(bridgeGame);
      else if (bridgeGame.state === STATE.FAIL) this.pauseGame(bridgeGame);
      else if (bridgeGame.state === STATE.SUCCESS) this.endGame(bridgeGame);
    });
  }

  pauseGame(bridgeGame) {
    readGameCommand((command) => {
      if (command === 'R') {
        bridgeGame.retry();
        this.progressGame(bridgeGame);
        return;
      }
      this.endGame(bridgeGame);
    });
  }

  endGame(bridgeGame) {
    printResult({
      state: bridgeGame.state, tryCount: bridgeGame.tryCount, ...bridgeGame.currentRoute,
    });
    Console.close();
  }
}

module.exports = App;
