const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Bridge = require('./model/Bridge');
const UserBridge = require('./model/UserBridge');
const BridgeGame = require('./controller/BridgeGame');

class App {
  bridge;
  userBridge;
  bridgeGame;
  moveCount;
  constructor() {
    this.bridge = new Bridge();
    this.userBridge = new UserBridge();
    this.bridgeGame = new BridgeGame(this.bridge, this.userBridge);
    this.moveCount = 0;
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
      this.bridgeGame.move(movement, this.moveCount);
      this.moveCount += 1;
      this.showMap();
    });
  }
  showMap() {
    OutputView.printMap(this.userBridge.condition);
  }
}

const app = new App();
app.play();

module.exports = App;
