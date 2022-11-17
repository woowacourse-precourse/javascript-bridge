const {
  printStart, printMap, printResult, printError,
} = require('./OutputView');
const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const { STATE } = require('./Contants');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    printStart();
    readBridgeSize()
      .then((size) => {
        const bridgeGame = new BridgeGame(size);
        console.log(bridgeGame.bridge);
        return this.progressGame(bridgeGame);
      })
      .then((gameResult) => printResult(gameResult))
      .catch((e) => printError(e));
  }

  async progressGame(bridgeGame) {
    const to = await readMoving();
    const { upBridgeRoute, downBridgeRoute } = bridgeGame.move(to);
    printMap(upBridgeRoute, downBridgeRoute);
    if (bridgeGame.state === STATE.FAIL) {
      const command = await readGameCommand();
      if (command === 'R') bridgeGame.retry();
    }
    if (bridgeGame.state === STATE.PROGRESS) return this.progressGame(bridgeGame);
    return { state: bridgeGame.state, tryCount: bridgeGame.tryCount };
  }
}

const app = new App();
app.play();

module.exports = App;
