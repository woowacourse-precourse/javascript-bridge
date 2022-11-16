const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');

class App {
  play() {
    this.game = new BridgeGame();
    OutputView.printStart();
  }
}

const app = new App();
app.play();

module.exports = App;
