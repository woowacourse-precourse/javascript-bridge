const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Bridge = require('./model/Bridge');
const BridgeGame = require('./controller/BridgeGame');

const { Console } = require('@woowacourse/mission-utils');

class App {
  bridge;
  bridgeGame;
  moveCount;
  constructor() {
    this.bridge = new Bridge();
    this.bridgeGame = new BridgeGame(this.bridge, this.userBridge);
    this.moveCount = 0;
  }
  play() {
    OutputView.printStart();
    this.startGame();
  }
  startGame() {
    this.buildBridge();
  }
  buildBridge() {
    InputView.readBridgeSize((bridgeSize) => {
      this.bridgeGame.buildBridge(bridgeSize);
      this.moveOnBridge();
    });
  }
  moveOnBridge() {
    Console.print(this.bridge.condition);
    InputView.readMoving((movement) => {
      this.bridgeGame.move(movement, this.moveCount);
      this.moveCount += 1;
      this.comparisonOperator();
    });
  }
  comparisonOperator() {
    const currentMap = this.bridgeGame.comparisonOperator();
    const up = currentMap[0];
    const down = currentMap[1];
    this.showMap(up, down);
  }
  showMap(up, down) {
    OutputView.printMap(up, down);
    const gameSet = this.bridgeGame.checkGameSet(up, down);
    if (gameSet === true) {
      this.askRetry();
    } else this.moveOnBridge();
  }
  askRetry() {
    InputView.readGameCommand((restartOrQuit) => {
      if (restartOrQuit === 'R') {
        this.bridgeGame.retry();
        this.moveOnBridge();
      } else if (restartOrQuit === 'Q') {
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
