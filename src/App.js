const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

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
      const isSuccess = this.bridgeGame.move(inputMove);
      const isGameOver = this.bridgeGame.getGameOver();
      if (!isSuccess) {
        this.userInputEnd();
        return;
      } else if (isSuccess && isGameOver) {
        OutputView.printResult(this.bridgeGame.end());
        return;
      }
      this.userInputMove();
    });
  }

  userInputEnd() {
    InputView.readGameCommand(inputEnd => {
      if (inputEnd === 'Q') {
        OutputView.printResult(this.bridgeGame.end());
      } else if (inputEnd === 'R') {
        this.bridgeGame.retry();
        this.userInputMove();
      }
    });
  }
}

module.exports = App;
