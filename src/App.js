const { GAME_MSG } = require('./constants/message.js');
const { printMsg } = require('./views/OutputView.js');
const InputView = require('./views/InputView.js');
const OutputView = require('./views/OutputView.js');
const BridgeGame = require('./BridgeGame.js');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    printMsg(GAME_MSG.start);
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize(this.tryBuildBridge.bind(this));
  }

  tryBuildBridge(size) {
    try {
      this.bridgeGame.build(size);

      this.requestMovingDirection();
    } catch ({ message }) {
      this.reRequestBridgeSize(message);
    }
  }

  requestMovingDirection() {
    InputView.readMoving(this.tryMovePlayer.bind(this));
  }

  tryMove(movingDirection) {
    try {
      this.bridgeGame.move(movingDirection);

      const movementLogs = this.bridgeGame.getMovementLogs();
      OutputView.printMap(movementLogs);
    } catch ({ message }) {
      this.reRequestMovingDirection(message);
    }
  }

  reRequestBridgeSize(message) {
    printMsg(message);
    this.requestBridgeSize();
  }

  reRequestMovingDirection(message) {
    printMsg(message);
    this.requestMovingDirection();
  }
}

const app = new App();
app.play();

module.exports = App;
