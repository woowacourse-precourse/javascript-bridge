const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.outputView = OutputView;
    this.BridgeGame = new BridgeGame();
  }

  play() {
    this.outputView.printStart();
    this.BridgeGame.selectBridgeSize();
  }
}
module.exports = App;
