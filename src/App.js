const { GAME_MSG } = require('./constants/message.js');
const { printMsg } = require('./views/OutputView.js');
const InputView = require('./views/InputView.js');
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
      printMsg(message);
      this.requestBridgeSize();
    }
  }

  requestMovingDirection() {
    InputView.readMoving(this.tryMovePlayer.bind(this));
  }

  tryMovePlayer(movingDirection) {
    try {
      this.bridgeGame.move(movingDirection);
    } catch ({ message }) {
      printMsg(message);
      this.requestMovingDirection();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
