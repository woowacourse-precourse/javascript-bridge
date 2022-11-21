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
    if (this.bridgeGame.isMovable()) {
      this.requestMove();
    } else {
      this.requestContinue();
    }
    if (this.bridgeGame.isWin()) {
      OutputView.printResult(
        this.bridgeGame.moveTracking(),
        this.bridgeGame.isWin(),
        this.bridgeGame.tryCount
      );
      Console.close();
    } else {
      this.requestMove();
    }
  }

  requestContinue() {
    InputView.readRetryOrQuit.call(this, this.retryOrQuit);
  }

  retryOrQuit(userChoice) {
    if (this.bridgeGame.retry(userChoice)) {
      this.requestMove();
    }
    if (this.bridgeGame.quit(userChoice)) {
      OutputView.printMap(this.bridgeGame.moveTracking());
      OutputView.printResult(
        this.bridgeGame.moveTracking(),
        this.bridgeGame.isWin(),
        this.bridgeGame.tryCount
      );
    }
  }
}

const app = new App();
app.play();

module.exports = App;
