const OutputView = require('./OutputView.js');
const InputView = require('./InputView.js');
const BridgeGame = require('./BridgeGame.js');

class App {
  /**
   * 게임을 시작하는 메서드
   */
  async play() {
    OutputView.printHi();

    InputView.readBridgeSize((bridgeLength) => {
      this.game = new BridgeGame(+bridgeLength);
      this.playOneStep();
    });
  }

  /**
   * 한 번 움직이는 메서드
   */
  async playOneStep() {
    InputView.readMoving((move) => {
      this.game.move(move);
      OutputView.printMap(this.game);

      if (this.game.reachedEndOfBridge && !this.game.isGameOver) OutputView.printResult(this.game);
      else if (this.game.isGameOver) this.askRetryGame();
      else this.playOneStep();
    });
  }

  /**
   * 게임을 다시 시작할지 묻는 메서드
   */
  async askRetryGame() {
    InputView.readGameCommand((willRetry) => {
      if (this.game.retry(willRetry)) this.playOneStep();
      else OutputView.printResult(this.game);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
