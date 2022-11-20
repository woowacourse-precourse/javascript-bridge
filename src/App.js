const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {

  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(bridgeSize => {
      this.bridgeGame.init(bridgeSize);
      this.userInputMove();
    });
  }

  userInputMove() {
    InputView.readMoving(inputMove => {
      const isPass = this.bridgeGame.move(inputMove);
      const isGameOver = this.bridgeGame.getGameOver();
      const bridgeMap = this.bridgeGame.getBridgeMap();
      this.toDoNext(isPass, isGameOver, bridgeMap);
    });
  }

  toDoNext(isPass, isGameOver, bridgeMap) {
    OutputView.printMap(bridgeMap);
    if (!isPass) {
      this.userInputEnd();
      return;
    } else if (isPass && isGameOver) {
      OutputView.printResult(this.bridgeGame.endMessage(), bridgeMap);
      return;
    }
    this.userInputMove();
  }

  userInputEnd() {
    InputView.readGameCommand(inputEnd => {
      if (inputEnd === 'Q') {
        const bridgeMap = this.bridgeGame.getBridgeMap();
        OutputView.printResult(this.bridgeGame.endMessage(), bridgeMap);
        return;
      }
      this.bridgeGame.retry();
      this.userInputMove();
    });
  }
}

module.exports = App;
