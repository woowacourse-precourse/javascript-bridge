const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Bridge = require('./model/Bridge');
const BridgeGame = require('./controller/BridgeGame');

class App {
  count;
  bridge;
  bridgeGame;
  constructor() {
    this.count = 0;
    this.bridge = new Bridge();
    this.bridgeGame = new BridgeGame();
  }
  play() {
    OutputView.printStart();
    this.startGame();
  }
  startGame() {
    this.bridgeGame.addCount();
    this.buildBridge();
  }
  buildBridge() {
    InputView.readBridgeSize((bridgeSize) => {
      this.bridgeGame.buildBridge(bridgeSize);
      this.moveOnBridge();
    });
  }
  moveOnBridge() {
    InputView.readMoving();
  }
}

const app = new App();
app.play();

module.exports = App;
