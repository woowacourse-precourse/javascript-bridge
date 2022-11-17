const { printStart, printMap } = require('./OutputView');
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
      .then((gameResult) => {
        this.quitGame(gameResult);
      });
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

  quitGame(gameResult) {
    const { state, tryCount } = gameResult;
    console.log(state, tryCount);
  }
}

const app = new App();
app.play();

module.exports = App;
