const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');

class App {

  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    InputView.readBridgeSize(bridgeSize => {
      this.bridgeGame.init(bridgeSize);
      this.userInputMove();
    });
  }

  userInputMove() {
    InputView.readMoving(inputMove => {
      if (!this.bridgeGame.move(inputMove)) {
        this.userInputEnd();
      } else {
        this.userInputMove();
      }
    });
  }

  userInputEnd() {
    InputView.readGameCommand();
    // 추가 구현
  }
}

module.exports = App;
