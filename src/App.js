const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    OutputView.printStart();
    const bridgeGame = new BridgeGame();
    bridgeGame.start();
  }
}

const app = new App();
app.play();
module.exports = App;
