const OutputView = require('./OutputView.js');
const InputView = require('./InputView.js');
const BridgeGame = require('./BridgeGame.js');

class App {
  constructor() {
    this.totalTrial = 0;
  }

  /**
   * 게임을 시작하는 메서드
   */
  async play() {
    OutputView.printHi();

    const bridgeSize = await InputView.readBridgeSize();
    this.game = new BridgeGame(bridgeSize);
    this.playOneStep();
  }

  /**
   * 한 번 움직이는 메서드
   */
  async playOneStep() {
    const move = await InputView.readMoving();

    this.game.move(move);
    OutputView.printMap(this.game);

    if (this.game.reachedEndOfBridge && !this.game.isGameOver) OutputView.printResult(this.game);
    else if (this.game.isGameOver) this.askRetryGame();
    else this.playOneStep();
  }

  /**
   * 게임을 다시 시작할지 묻는 메서드
   */
  async askRetryGame() {
    const willRetry = await InputView.readGameCommand();

    if (this.game.retry(willRetry)) this.playOneStep();
    else OutputView.printResult(this.game);
  }
}

const app = new App();
app.play();

module.exports = App;
