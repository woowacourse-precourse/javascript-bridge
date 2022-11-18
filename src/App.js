const Bridge = require('./Bridge');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  randomBirdge;
  bridgeGame;

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize.call(
      this,
      this.makeBridge,
      this.inputMove,
      this.inputRetry
    );
  }

  makeBridge(input) {
    this.randomBirdge = new Bridge(Number(input));
    this.bridgeGame = new BridgeGame(this.randomBirdge);
  }

  inputMove(input) {
    const isEnd = this.bridgeGame.move(input);
    const isWin = this.bridgeGame.isGameWin();

    const result = this.bridgeGame.result;
    OutputView.printMap(result);

    if (isWin) {
      this.finishGame(true);
    }

    return [isEnd, isWin];
  }

  inputRetry(input) {
    if (input === 'R') {
      this.bridgeGame.retry();
      InputView.readMoving.call(this, this.inputMove, this.inputRetry);
    } else {
      this.finishGame(false);
      InputView.gameEnd();
    }
  }

  finishGame(status) {
    const result = this.bridgeGame.result;
    const gameStatus = this.isWin(status);
    const totalGame = this.bridgeGame.totalGame;
    OutputView.printResult(result, gameStatus, totalGame);
  }

  isWin(status) {
    if (status === true) {
      return '성공';
    }
    return '실패';
  }
}

const app = new App();
app.play();

module.exports = App;
