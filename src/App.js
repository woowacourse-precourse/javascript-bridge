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
      const bridgeMap = this.bridgeGame.getBridgeMap();
      if (!isSuccess) {
        OutputView.printMap(bridgeMap);
        this.userInputEnd();
        return;
      } else if (isSuccess && isGameOver) {
        OutputView.printMap(bridgeMap);
        OutputView.printResult(this.bridgeGame.end(), bridgeMap);
        return;
      }
      OutputView.printMap(bridgeMap);
      this.userInputMove();
    });
  }

  userInputEnd() {
    InputView.readGameCommand(inputEnd => {
      if (inputEnd === 'Q') {
        const bridgeMap = this.bridgeGame.getBridgeMap();
        OutputView.printResult(this.bridgeGame.end(), bridgeMap);
      } else if (inputEnd === 'R') {
        this.bridgeGame.retry();
        this.userInputMove();
      }
    });
  }
}

module.exports = App;
