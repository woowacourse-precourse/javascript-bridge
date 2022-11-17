const { printStart } = require('./OutputView');
const { readBridgeSize } = require('./InputView');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    printStart();
    readBridgeSize().then((size) => {
      const bridgeGame = new BridgeGame(size);
      console.log(bridgeGame.bridge);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
