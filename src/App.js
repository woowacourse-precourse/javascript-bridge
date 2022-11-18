const Bridge = require('./Bridge');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  randomBirdge;
  bridgeGame;

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.makeBridge, this.func2, this.func3);
  }

  makeBridge(input) {
    this.randomBirdge = new Bridge(Number(input));
    this.bridgeGame = new BridgeGame(this.randomBirdge);
  }

  func2(input) {
    const isEnd = this.bridgeGame.move(input);
    const isWin = this.bridgeGame.isGameWin();

    return [isEnd, isWin];
  }

  func3(input) {
    console.log(input);
  }
}

const app = new App();
app.play();

module.exports = App;
