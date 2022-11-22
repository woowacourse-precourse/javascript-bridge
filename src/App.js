const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Bridge = require('./model/Bridge');
const BridgeGame = require('./controller/BridgeGame');

const { Console } = require('@woowacourse/mission-utils');

class App {
  bridge;
  bridgeGame;
  currentMap;

  constructor() {
    this.bridge = new Bridge();
    this.bridgeGame = new BridgeGame(this.bridge, this.userBridge);
    this.currentMap = [];
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
    InputView.readMoving((movement) => {
      this.bridgeGame.move(movement);
      this.comparisonOperator();
    });
  }
  comparisonOperator() {
    this.currentMap = this.bridgeGame.comparisonOperator();
    this.showMap();
  }
  showMap() {
    OutputView.printMap(this.currentMap);
    this.checkGameSet();
  }
  checkGameSet() {
    const gameSet = this.bridgeGame.checkGameSet(this.currentMap);
    if (this.bridgeGame.failOrSuccess) {
      this.quitGame();
    } else if (gameSet) {
      this.askRetry();
    } else this.moveOnBridge();
  }
  askRetry() {
    InputView.readGameCommand((restartOrQuit) => {
      if (restartOrQuit === 'R') {
        this.restartGame();
      } else if (restartOrQuit === 'Q') {
        this.quitGame();
      }
    });
  }
  restartGame() {
    this.bridgeGame.retry();
    this.moveOnBridge();
  }
  quitGame() {
    const gameResult = this.bridgeGame.getGameResult();
    OutputView.printResult(this.currentMap, gameResult, this.bridgeGame.gameCount);
  }
}

const app = new App();
app.play();

module.exports = App;
