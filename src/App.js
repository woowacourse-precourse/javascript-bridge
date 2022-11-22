const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Bridge = require('./model/Bridge');
const BridgeGame = require('./controller/BridgeGame');

class App {
  bridge;
  bridgeGame;
  constructor() {
    this.bridge = new Bridge();
    this.bridgeGame = new BridgeGame(this.bridge);
  }
  play() {
    OutputView.printStart();
    this.startGame();
  }
  startGame() {
    this.bridgeGame.addGameCount();
    this.buildBridge();
  }
  buildBridge() {
    InputView.readBridgeSize((bridgeSize) => {
      this.bridgeGame.buildBridge(bridgeSize);
      this.moveOnBridge();
    });
  }
  moveOnBridge() {
    InputView.readMoving((movement) => {
      this.bridgeGame.move(movement);
    });
  }
  // showPlayer;
}

const app = new App();
app.play();

module.exports = App;
