const { printStart, printMap } = require('./OutputView');
const { readBridgeSize, readMoving } = require('./InputView');
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
    if (bridgeGame.progress) this.progressGame(bridgeGame);
  }
}

const app = new App();
app.play();

module.exports = App;
