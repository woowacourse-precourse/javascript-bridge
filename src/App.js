const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
class App {
  constructor() {
    OutputView.printGameStart();
    this.bridgeGame = new BridgeGame();
  }
  play() {
    this.bridgeGame.start();
  }
}
module.exports = App;
const app = new App();
app.play();
