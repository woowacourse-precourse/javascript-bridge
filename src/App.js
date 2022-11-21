const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const InputVaildation = require('./InputValidation');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGameStartMsg();
    this.requestBridgeLength();
  }

  requestBridgeLength() {
    InputView.readBridgeSize.call(this, this.makeBridge);
  }

  makeBridge(length) {
    this.bridgeGame.buildBridge(length);
    this.requestMove();
  }

  requestMove() {
    InputView.readMoving.call(this, this.moveUser);
  }

  moveUser(upOrDown) {
    this.bridgeGame.move(upOrDown);
    OutputView.printMap(this.bridgeGame.moveTracking());
    if (this.bridgeGame.walkable()) {
      this.requestMove();
    } else {
      this.requestContinue();
    }
    if (this.bridgeGame.isWin()) {
      const uesrfootprint = this.bridgeGame.moveTracking();
      OutputView.printResult(uesrfootprint, this.bridgeGame.isWin(), this.bridgeGame.tryCount);
      Console.close();
    } else {
      this.requestMove();
    }
  }

  requestContinue() {
    InputView.readRetryOrQuit.call(this, this.retryOrQuit);
  }

  retryOrQuit(userChoice) {
    if (userChoice === 'R') {
      this.bridgeGame.retry();
      this.requestMove();
    }
    if (userChoice === 'Q') {
      this.gameEnd();
    }
  }

  gameEnd() {
    const uesrfootprint = this.bridgeGame.moveTracking();
    OutputView.printResult(uesrfootprint, this.bridgeGame.isWin(), this.bridgeGame.tryCount);
  }
}

const app = new App();
app.play();

module.exports = App;
