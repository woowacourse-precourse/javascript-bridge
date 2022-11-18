const Bridge = require('./models/Bridge');
const BridgeGame = require('./models/BridgeGame');
const isSuccess = require('./utils/isSuccess');
const MovingValidation = require('./utils/MovingValidation');
const RetryValidation = require('./utils/RetryValidation');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

class App {
  randomBirdge;
  bridgeGame;

  play() {
    OutputView.printGameStart();
    const funcList = [this.makeBridge, this.inputMove, this.inputRetry];
    InputView.readBridgeSize.call(this, funcList);
  }

  makeBridge(input) {
    this.randomBirdge = new Bridge(Number(input));
    this.bridgeGame = new BridgeGame(this.randomBirdge);
  }

  inputMove(input) {
    new MovingValidation(input);
    const isEnd = this.bridgeGame.move(input);
    const isWin = this.bridgeGame.isGameWin;

    const resultString = this.bridgeGame.resultString;
    OutputView.printMap(resultString);

    if (isWin) this.finishGame(true);

    return [isEnd, isWin];
  }

  inputRetry(input) {
    new RetryValidation(input);
    if (input === 'R') {
      this.bridgeGame.retry();
      InputView.readMoving.call(this, this.inputMove, this.inputRetry);
    } else {
      this.finishGame(false);
      InputView.gameEnd();
    }
  }

  finishGame(status) {
    const resultString = this.bridgeGame.resultString;
    const gameStatus = isSuccess(status);
    const totalGame = this.bridgeGame.totalGame;
    OutputView.printResult(resultString, gameStatus, totalGame);
  }
}

const app = new App();
app.play();

module.exports = App;
