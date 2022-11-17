const { printStart, printMap } = require('./OutputView');
const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const { STATE } = require('./Contants');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    printStart();
    readBridgeSize().then((size) => {
      const bridgeGame = new BridgeGame(size);
      console.log(bridgeGame.bridge);
      this.progressGame(bridgeGame);
    });
  }

  async progressGame(bridgeGame) {
    const to = await readMoving();
    const { upBridgeRoute, downBridgeRoute } = bridgeGame.move(to);
    printMap(upBridgeRoute, downBridgeRoute);
    if (bridgeGame.state === STATE.PROGRESS) this.progressGame(bridgeGame);
    if (bridgeGame.state === STATE.FAIL) {
      const command = await readGameCommand();
      if (command === 'R') {
        bridgeGame.retry();
        this.progressGame(bridgeGame);
      }
      // if (command === 'Q') bridgeGame.state = STATE.END;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
