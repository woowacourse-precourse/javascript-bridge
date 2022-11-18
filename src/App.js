const Bridge = require('./Bridge');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  randomBirdge;
  bridgeGame;

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.makeBridge, this.inputMove, this.func3);
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

    return [isEnd, isWin];
  }

  func3(input) {
    console.log(input);
  }
}

const app = new App();
app.play();

module.exports = App;
