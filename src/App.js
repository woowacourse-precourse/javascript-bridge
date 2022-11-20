const BridgeGame = require('./BridgeGame');
const { readBridgeSize } = require('./InputView');

const bridgeGame = new BridgeGame();

class App {
  play() {
    const bridgeSize = readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
