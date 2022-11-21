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
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(length) {
    try {
      InputVaildation.ofBridgeLength(length);
      this.bridgeGame.buildBridge(length);
      this.requestMove();
    } catch {
      OutputView.printWrongInputOfBridgeLength();
      this.requestBridgeLength();
    }
  }

  requestMove() {
    InputView.readMoving(this.moveUser.bind(this));
  }

  moveUser(upOrDown) {
    try {
      InputVaildation.ofMove(upOrDown);
      this.bridgeGame.move(upOrDown);
      const bridge = this.bridgeGame.moveTracking();
      OutputView.printMap(bridge);
    } catch {
      OutputView.printWrongInputOfMoving();
      this.requestMove();
    }
    if (this.bridgeGame.isMovable()) {
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
    } else {
      this.requestContinue();
    }
  }

  requestContinue() {
    InputView.readRetryOrQuit(this.retryOrQuit.bind(this));
  }

  retryOrQuit(userChoice) {
    if (this.bridgeGame.retry(userChoice)) {
      this.requestMove();
    }
    if (this.bridgeGame.quit(userChoice)) {
      const map = this.bridgeGame.moveTracking();
      const gameResult = this.bridgeGame.isWin();
      OutputView.printMap(map);
      OutputView.printResult(gameResult);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
